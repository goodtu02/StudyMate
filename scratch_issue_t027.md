## 📋 Feature Overview

`App.tsx`에 인라인으로 작성되어 있던 Header 요소들을 별도의 컴포넌트로 분리하여 모듈성을 높이고, 앱 이름과 짧은 설명을 제공하는 역할을 명확히 합니다.

## 🔗 Related Spec

- **Spec**: `docs/spec.md`
- **Plan**: `specs/001-featurename-core-task/plan.md`
- **Tasks**: `specs/001-featurename-core-task/tasks.md`

## 📝 Scope of Work

- [ ] `src/components/Header.tsx` 생성
- [ ] `App.tsx`의 `<header>` 태그와 그 내용을 `Header` 컴포넌트로 이동
- [ ] `App.tsx`에서 `Header` 컴포넌트를 import 하여 사용

## ✅ Acceptance Criteria

1. 화면 상단의 "StudyMate" 제목과 설명 텍스트가 이전과 동일하게 렌더링되어야 한다.
2. `App.tsx`의 렌더링 코드가 더 간결해져야 한다.

## 🌿 Branch

`chore/t027-extract-header`

## 📌 Notes

- 코드 폴리싱 및 구조 개선(Polish) 목적입니다.
