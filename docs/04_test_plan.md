# 04. Test Plan & Results

## 1. Manual Test Cases & Results (Phase 9)

| ID     | Test Item              | Steps                           | Expected Result                             | Status | Actual Result |
| ------ | ---------------------- | ------------------------------- | ------------------------------------------- | ------ | ------------- |
| TC-001 | Create task            | Enter title and date, then save | Task appears in list                        | ✅ Pass | Task successfully added and rendered in the list |
| TC-002 | Empty title validation | Save without title              | Error message appears and task is not saved | ✅ Pass | Error "Please enter both a study title and a study date" displayed |
| TC-003 | Today’s task display   | Create task for today           | Task appears in today’s list                | ✅ Pass | Task appears under "Today" filter correctly |
| TC-004 | Complete task          | Click complete button           | Task status changes to completed            | ✅ Pass | Checkbox toggles and status badge changes to "Done" |
| TC-005 | Save completion status | Refresh after completing task   | Completed status remains                    | ✅ Pass | localStorage persists "isCompleted" state |
| TC-006 | Write reflection       | Enter and save reflection       | Reflection is displayed and saved           | ✅ Pass | Reflection is stored in localStorage and persists on reload, UI indicator shows "Reflection saved" |
| TC-007 | Edit task              | Edit an existing task           | Updated values are shown                    | ✅ Pass | Edit form opens, saves changes, and updates UI |
| TC-008 | Delete task            | Click delete button             | Task is removed from list                   | ✅ Pass | Task is successfully removed after confirmation |
| TC-009 | Data persistence       | Create task and refresh browser | Task remains                                | ✅ Pass | Task is reloaded correctly from localStorage |
| TC-010 | AI suggestion          | Click AI suggestion button      | Suggested sentence is displayed             | ⏳ N/A  | (Not implemented in Phase 1~9, planned for Phase 10) |
| TC-011 | Summary Panel updates  | Add/complete/delete tasks       | Total/Done/Pending stats update instantly   | ✅ Pass | Summary panel reflects exact count immediately |
| TC-012 | Empty State display    | Filter tasks with no results    | Empty message displayed                     | ✅ Pass | Shows distinct message based on filter status |

## 2. Additional Testing Scenarios

### localStorage Error Handling (T029)
- **Scenario**: `localStorage`에 저장된 `studymate_tasks` 항목을 의도적으로 깨진 JSON 문자열(예: `[{wrong]`)로 변조 후 브라우저 새로고침.
- **Expected**: `JSON.parse` 에러가 발생하더라도 앱이 크래시되지 않고, 빈 배열(`[]`) 상태로 초기화되어 정상 작동을 계속할 수 있어야 함.
- **Result**: ✅ **Pass**. 콘솔에 에러가 로깅되고, 화면은 빈 태스크 리스트 상태로 정상 로딩됨. 신규 태스크 추가 시 기존 데이터를 덮어쓰고 정상적으로 다시 동작함.

### Responsive UI (T026)
- **Scenario**: 모바일 화면 크기(width < 600px)에서 접속.
- **Expected**: 레이아웃이 세로로 정렬되며, 화면을 벗어나거나 클릭이 불가능한 요소가 없어야 함.
- **Result**: ✅ **Pass**. SummaryPanel, TaskCard 내 요소들이 적절히 세로 정렬되고 패딩이 조정됨을 확인.
