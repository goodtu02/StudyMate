# 설계 문서 (Design Document)

## 1. 아키텍처 개요

StudyMate는 **클라이언트 측 싱글 페이지 애플리케이션(SPA)**으로, 별도의 서버 없이 브라우저의 localStorage를 데이터 저장소로 활용합니다.

```
┌─────────────────────────────────────────────┐
│                  브라우저                      │
│                                             │
│  ┌─────────────────────────────────────────┐ │
│  │            React 컴포넌트 트리             │ │
│  │                                         │ │
│  │  App.tsx (상태 관리 & 라우팅)              │ │
│  │    ├── SummaryPanel (학습 진행 요약)       │ │
│  │    ├── TaskForm (태스크 입력 폼)           │ │
│  │    ├── FilterBar (전체/오늘 필터)          │ │
│  │    ├── TaskList (태스크 리스트)            │ │
│  │    │     └── TaskCard (개별 카드)          │ │
│  │    └── ReflectionArea (회고 + AI 제안)    │ │
│  └─────────────────────────────────────────┘ │
│                      ↕                       │
│  ┌─────────────────────────────────────────┐ │
│  │          서비스 레이어                      │ │
│  │  storage.ts     (localStorage CRUD)     │ │
│  │  aiService.ts   (Mock/Real AI API)      │ │
│  └─────────────────────────────────────────┘ │
│                      ↕                       │
│  ┌─────────────────────────────────────────┐ │
│  │   유틸리티 / 모델                          │ │
│  │   dateUtils.ts  (isToday, formatDate)   │ │
│  │   StudyTask.ts  (데이터 인터페이스)         │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

---

## 2. 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | React | 19.x |
| 언어 | TypeScript | 5.8+ |
| 번들러 | Vite | 8.x |
| 스타일링 | Vanilla CSS (CSS Custom Properties) | - |
| 테스트 | Vitest + React Testing Library | 4.x / 16.x |
| 린터 | ESLint | 9.x |
| 포매터 | Prettier | 3.x |
| 배포 | Vercel | - |
| 형상관리 | Git + GitHub | - |

---

## 3. 데이터 모델

### StudyTask 인터페이스

```typescript
interface StudyTask {
  id: string;              // UUID (crypto.randomUUID)
  title: string;           // 태스크 제목 (필수)
  date: string;            // 학습 예정 날짜 (YYYY-MM-DD, 필수)
  isCompleted: boolean;    // 완료 여부 (필수)
  category?: string;       // 카테고리/과목 (선택)
  estimatedMinutes?: number; // 예상 학습 시간 (선택)
  memo?: string;           // 메모 (선택)
  reflection?: string;     // 학습 회고 (선택)
  createdAt: string;       // 생성 일시 (ISO 8601)
  updatedAt: string;       // 수정 일시 (ISO 8601)
  completedAt?: string;    // 완료 일시 (ISO 8601, 완료 시 설정)
}
```

### 저장소 스키마

- **키**: `studymate_tasks`
- **형식**: `JSON.stringify(StudyTask[])`
- **위치**: `window.localStorage`

---

## 4. 컴포넌트 설계

### 4.1 App.tsx (Root Component)
- **역할**: 전역 상태 관리, 이벤트 핸들러 정의, 레이아웃 구성
- **상태**: `tasks`, `filter`, `editingTask`, `selectedTaskId`, `theme`
- **레이아웃**: CSS Grid 2단 (사이드바 340px + 메인 영역)

### 4.2 SummaryPanel
- **역할**: 오늘 학습 통계 표시 (총 태스크, 완료, 미완료, 완료율)
- **디자인**: Glassmorphism 카드, SVG 아이콘, 프로그레스 바

### 4.3 TaskForm
- **역할**: 새 태스크 생성 및 기존 태스크 편집
- **검증**: 빈 제목 차단, 날짜 기본값 오늘
- **모드**: 생성 / 편집 (editingTask 유무로 분기)

### 4.4 FilterBar
- **역할**: 전체 / 오늘 필터 토글
- **디자인**: 세그먼트 컨트롤 스타일

### 4.5 TaskList + TaskCard
- **역할**: 태스크 목록 렌더링, 개별 태스크 상호작용
- **기능**: 완료 토글, 편집, 삭제, 완료 상태 시각적 구분

### 4.6 ReflectionArea
- **역할**: 선택된 태스크의 회고 작성 및 AI 제안
- **디자인**: 노트북 라인 배경, AI 제안 버튼

---

## 5. 스타일 시스템

### 5.1 디자인 토큰 (CSS Custom Properties)
- **색상**: HSL 기반 팔레트 (primary, secondary, success, danger, warning)
- **그림자**: 3단계 (`--shadow-sm`, `--shadow-md`, `--shadow-lg`)
- **둥근 모서리**: `--border-radius-sm` (8px), `--border-radius-md` (12px), `--border-radius-lg` (16px)
- **타이포그래피**: Inter (본문), Outfit (제목/UI)

### 5.2 테마 시스템
- **라이트 모드**: 밝은 배경, glassmorphism 카드
- **다크 모드**: `[data-theme="dark"]` CSS 선택자, 어두운 배경
- **저장**: `localStorage`에 테마 상태 저장

---

## 6. 반응형 디자인

| 화면 크기 | 레이아웃 |
|-----------|---------|
| ≥ 900px | 2단 그리드 (사이드바 + 메인) |
| < 900px | 단일 컬럼 스택 |

---

## 7. 외부 API

### AI 회고 제안 (aiService.ts)
- **Mock 모드**: 기본, 랜덤 한국어 제안 반환
- **Real 모드**: Google Gemini API 호출 (환경변수 `VITE_GEMINI_API_KEY` 필요)
- **폴백**: API 실패 시 Mock 응답 자동 반환
