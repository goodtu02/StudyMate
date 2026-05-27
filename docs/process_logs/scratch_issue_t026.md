## 📋 Feature Overview

모바일 기기에서도 화면이 깨지지 않고 보기 좋게 표시될 수 있도록 반응형 CSS 레이아웃(Media Queries)을 추가합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`

## 📝 Scope of Work

- [ ] `src/App.css` 또는 `src/index.css`에 모바일 화면(width < 768px 등)을 고려한 미디어 쿼리 추가
- [ ] 폼 입력 레이아웃(`TaskForm`), `TaskCard`, `SummaryPanel`의 모바일 환경 최적화
- [ ] 좌우 여백 및 버튼 크기 조정 등 폴리싱

## ✅ Acceptance Criteria

1. 데스크탑 브라우저 창 너비를 좁혔을 때, 가로 스크롤이 생기지 않고 화면 너비에 맞게 레이아웃이 자연스럽게 조정되어야 한다.
2. 입력 폼의 요소들이 모바일 환경에서 세로로 적절히 떨어져서 클릭하기 편하게 표시되어야 한다.

## 🌿 Branch

`chore/t026-responsive-css`

## 📌 Notes

- 전체적인 앱 완성도를 높이는 Polish 작업의 일환입니다.
