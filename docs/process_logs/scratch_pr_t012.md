## 📋 Summary

학습 태스크의 개별 항목을 표시하는 `TaskCard` 컴포넌트를 구현하고 화면에 연동했습니다.

## 🔗 Related Issue

Closes #15

## 🌿 Branch

`feat/t012-taskcard` → `dev`

---

## 📝 Changes

| File | Change |
|------|--------|
| `src/components/TaskCard.tsx` | TaskCard 컴포넌트 신규 생성 및 상태/데이터 바인딩 |
| `src/App.tsx` | 기존 `<li>` 목록을 `TaskCard` 컴포넌트로 교체 적용 |
| `specs/001-featurename-core-task/tasks.md` | T012 완료 처리 |

---

## 🤖 AI Usage Log

| Step | AI Used? | Prompt Summary | AI Output Summary | Human Action |
|------|----------|----------------|-------------------|--------------|
| 구현 | ✅ Yes | TaskCard 컴포넌트 생성 요청 | TaskCard 코드 작성 | 검토 후 수용 |

---

## 🧪 Test Results

| Test Case | Description | Result |
|-----------|-------------|--------|
| TC-003 | 리스트에 올바른 정보가 표시되는지 확인 | ✅ Pass |

**Manual test steps performed**:
1. 임의의 태스크 생성
2. 리스트에서 제목, 날짜, 카테고리가 텍스트로 잘 표현되는지 확인
3. 상태 뱃지("Pending")가 시각적으로 표시되는지 확인

---

## ✅ Definition of Done Checklist

- [x] 관련 요구사항(FR-XXX)을 만족한다
- [x] 수동 테스트를 통과했다
- [x] 이 PR description에 변경사항을 기록했다
- [x] 이 PR description에 테스트 결과를 기록했다
- [x] AI 사용 내역을 위 테이블에 기록했다
- [x] 인간 검토(Human Review) 결과를 위 테이블에 기록했다
- [x] 관련 Issue가 연결되어 있다
- [x] 브랜치명이 spec.md §11.2 형식을 따른다
- [x] 커밋 메시지가 `type: short summary` 형식을 따른다 (spec.md §11.3)
- [x] **Assignees** 등록을 했다
- [x] **Label** 등록을 했다

---

## 💬 Reviewer Notes

작은 이슈 단위로 T012 단일 구현 건입니다.
