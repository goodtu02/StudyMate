# StudyMate 📚

StudyMate는 학습 일정 관리, 학습 후 회고 작성, 그리고 AI 기반의 회고 제안을 통해 자기 주도 학습을 돕는 모던 웹 애플리케이션입니다.

> **프로젝트 배경 (Project Context)**: 본 프로젝트는 **Process-based Vibe Coding**(프로세스 기반 AI 협업 코딩)의 가능성을 탐구하기 위한 과제로 진행되었습니다. 명세서(Specification) 작성, 태스크 세분화, 테스트 주도 개발(TDD), 지속적인 품질 관리 등의 소프트웨어 공학적 프로세스를 체계적으로 적용하여, AI 코딩 에이전트를 활용하면서도 프로젝트 스코프와 코드 품질을 엄격하게 통제하며 완성된 프로덕트입니다.

---

## ✨ 주요 기능 (Features)

- **학습 태스크 관리**: 일일 학습 태스크를 생성, 조회, 수정, 삭제 및 완료 처리할 수 있습니다.
- **학습 회고 (Study Reflection)**: 태스크를 완료한 후, 무엇을 배웠는지 되돌아보는 회고를 작성할 수 있습니다.
- **AI 회고 제안 (AI Suggestion)**: 회고 작성이 막막할 때, 태스크의 제목, 카테고리, 메모를 바탕으로 AI가 회고 초안을 제안해 줍니다.
- **로컬 데이터 저장 (Local Persistence)**: 별도의 서버 설정이나 회원가입이 필요 없습니다. 모든 데이터는 브라우저의 로컬 스토리지(`localStorage`)에 안전하게 저장됩니다.
- **반응형 & 접근성**: 깔끔하고 모던하며, 다양한 디바이스와 접근성을 고려한 UI를 제공합니다.

---

## 📷 스크린샷 (Screenshots)

| 초기 상태 (Empty State) | 태스크 생성 (Create Task) |
|-------------|-------------|
| ![Empty State](docs/screenshots/home_empty.png) | ![Create Task](docs/screenshots/create_task.png) |

| 태스크 목록 (Task List) | 회고 및 AI 제안 (Reflection) |
|-------------|----------------------------|
| ![Task List](docs/screenshots/home_tasks.png) | ![Reflection](docs/screenshots/reflection.png) |

---

## 🏗 프로젝트 문서 (Documentation)

개발 생명주기 전반에 걸쳐 기획, 테스트, AI 협업 로그 등 모든 과정을 문서화하였습니다:

- [프로젝트 명세서 (Project Specification)](docs/spec.md): 프로젝트의 요구사항과 개발 범위를 정의한 최상위 문서입니다.
- [테스트 계획 및 결과 (Test Plan & Results)](docs/04_test_plan.md): 수동 테스트 시나리오 및 Vitest 통합 테스트 결과가 기록되어 있습니다.
- [품질 관리 (Quality Management)](docs/05_quality_management.md): 코드 품질 리뷰, 리팩토링 로그, AI 산출물 검토 내역을 담고 있습니다.
- [프로세스 로그 (Process Logs)](docs/process_logs/): PR, 이슈 생성 및 TDD 진행 과정을 단계별로 꼼꼼히 기록한 작업 내역들입니다.

---

## 🛠 사용 기술 (Tech Stack)

- **프론트엔드 코어**: React 19, TypeScript, Vite
- **테스트**: Vitest, React Testing Library, jsdom
- **스타일링**: Vanilla CSS (커스텀 디자인 토큰 적용)
- **데이터 저장**: Local Storage API
- **도구 및 환경**: ESLint, Prettier

---

## 🚀 시작하기 (Getting Started)

### 사전 요구사항
- [Node.js](https://nodejs.org/) (v18 이상 권장)
- [npm](https://www.npmjs.com/)

### 설치 및 실행

1. **저장소 클론:**
   ```bash
   git clone https://github.com/goodtu02/StudyMate.git
   cd StudyMate
   ```

2. **의존성 패키지 설치:**
   ```bash
   npm install
   ```

3. **개발 서버 실행:**
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:5173` 으로 접속하여 앱을 확인할 수 있습니다.

### 테스트 실행

StudyMate는 **테스트 주도 개발(TDD)** 방식을 기반으로 작성된 자동화된 통합 테스트를 포함하고 있습니다.

```bash
# 전체 테스트 실행
npm run test

# UI 모드로 테스트 실행
npm run test:ui
```

---

## 📝 라이선스 (License)

이 프로젝트는 오픈 소스이며, MIT License를 따릅니다.
