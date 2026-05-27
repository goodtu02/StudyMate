## 📋 Feature Overview

전체 태스크의 통계(총 개수, 완료된 개수, 진행 중인 개수)를 한눈에 볼 수 있는 요약 패널 컴포넌트를 만들고 화면에 배치합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`
- **Requirements**: FR-006 (spec.md §5)

## 📝 Scope of Work

- [ ] `src/components/SummaryPanel.tsx` 파일 생성 (T023)
- [ ] 전달받은 `tasks` 배열을 기반으로 Total, Completed, Pending 개수를 계산하여 표시하는 UI 구현 (T024)
- [ ] `src/App.tsx`의 메인 레이아웃에 `<SummaryPanel>` 컴포넌트를 배치 (T025)

## ✅ Acceptance Criteria

1. 화면 상단 또는 리스트 상단에 요약 패널이 표시되어야 한다.
2. 현재 `tasks` 배열의 상태에 맞춰 Total, Completed, Pending 숫자가 정확하게 계산되어야 한다.
3. 태스크가 추가, 수정(토글), 삭제될 때 즉각적으로 패널의 숫자가 반영되어야 한다.

## 🌿 Branch

`feat/t023-t025-summary-panel`

## 📌 Notes

- 컴포넌트 생성(T023), 계산 로직(T024), 앱 연동(T025)이 밀접하게 연관되어 있으므로 단일 이슈 및 PR로 묶어서 처리하여 Phase 8을 완료합니다.
