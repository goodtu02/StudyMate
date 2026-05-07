# Project Specification: StudyMate

## 0. Document Overview

### 0.1 Purpose of This Document

This document is the top-level project specification for a process-based vibe coding assignment. It defines the software product, development scope, requirements, AI agent usage policy, development process, quality management criteria, and evidence that must be recorded throughout the project.

The purpose of this project is not only to build a working software product using an AI coding agent. The main purpose is to apply a structured software development process—from requirements analysis to quality management—while using vibe coding, and then analyze the effectiveness, benefits, limitations, and lessons learned from that process.

This specification will be used as the source document for further decomposition through Spec Kit or specify into feature specifications, implementation plans, task lists, test plans, and agent execution logs.

### 0.2 Project Name

**StudyMate: An AI-Assisted Personal Study Schedule and Reflection Web Application**

### 0.3 Project Type

* Assignment type: Analysis of process-based vibe coding effectiveness
* Development method: Specification-driven development with an AI coding agent
* Team structure: Individual or team-based execution
* Main deliverables:

  * Working software product
  * Screenshots of the software output
  * GitHub repository containing process evidence
  * Final PDF report
  * Lessons learned from applying the software development process

### 0.4 How This Document Will Be Used

This document will be used as:

1. The top-level context document for the AI coding agent
2. The source input for Spec Kit or specify
3. The reference document for GitHub Issues, branches, commits, and pull requests
4. Evidence for the requirements analysis section of the final report
5. The baseline for tracking requirement changes and scope decisions

---

## 1. Background and Problem Definition

### 1.1 Background

Vibe coding is a development approach in which a developer describes intent, requirements, or desired behavior in natural language, and an AI assistant or coding agent helps generate, modify, debug, and refactor code. This approach can increase initial development speed, but it can also introduce risks when requirements are unclear or when generated code is not properly reviewed.

Potential problems include:

* The project scope may expand too easily.
* AI-generated code may be accepted without sufficient review.
* The implementation may diverge from the original requirements.
* The developer may rely only on visible UI behavior without systematic testing.
* Development decisions and discussions may not be recorded.
* A final product may exist, but process evidence may be insufficient.

Therefore, this project applies a process-based vibe coding approach. The project begins with a clear specification, decomposes the work into smaller tasks, implements features through AI-assisted development, and records review, testing, and quality management activities in GitHub.

### 1.2 Problem to Solve

Students and individual learners often need to manage assignments, study plans, subjects, and personal learning goals. However, it is easy to lose track of what should be studied today, and it is also difficult to maintain a habit of writing short reflections after studying.

StudyMate aims to solve this problem by providing a simple web application where users can register study tasks, check today’s study schedule, mark tasks as completed, and write short reflections. The application may also provide an AI-assisted reflection suggestion feature to help users generate a starting point for their study reflection.

### 1.3 Analysis Perspective

The project will analyze the following questions:

1. Does writing a specification before using an AI coding agent improve requirement consistency?
2. Does decomposing tasks into smaller units make AI-generated code easier to review and fix?
3. Do GitHub Issues, Pull Requests, commits, and Discussions provide sufficient process evidence?
4. How does an AI coding agent improve productivity, and what quality risks does it create?
5. How does a structured development process compensate for the weaknesses of vibe coding?

---

## 2. Product Overview

### 2.1 Product Description

StudyMate is a personal study management web application. It allows users to create study tasks, view a list of scheduled tasks, check today’s study plan, mark tasks as completed, and write reflections for completed or ongoing study tasks.

As an optional AI-assisted feature, the system may suggest a short reflection sentence based on the task title, category, memo, and completion status. If using a real external AI API is not practical, the AI suggestion feature may be implemented as a mock function. The main purpose of this feature is to demonstrate AI-assisted behavior in the product while keeping the project scope manageable.

### 2.2 Product Goals

The goals of StudyMate are:

1. Allow users to easily create and manage study tasks.
2. Help users clearly identify what they need to study today.
3. Encourage users to write short reflections after studying.
4. Reduce the burden of writing reflections through an AI-assisted suggestion feature.
5. Provide a small but complete software product suitable for demonstrating requirements analysis, design, implementation, testing, quality management, and process documentation.

### 2.3 Core Values

* Simplicity: The application should remain small enough to complete within the assignment period.
* Verifiability: Each feature must have clear acceptance criteria and test criteria.
* Traceability: Development decisions, AI prompts, generated results, modifications, and testing activities must be recorded.
* Analyzability: The final report should be able to analyze the effect of process-based vibe coding using concrete evidence from the project.

### 2.4 Target Users

The target users are:

* College or university students
* Individual learners managing multiple subjects or study goals
* Users who want to write short study reflections
* Users who prefer a simple study management tool over a complex productivity system

### 2.5 Usage Environment

* Desktop web browser
* Basic support for mobile browser layout
* Single-user usage without login
* Data stored in localStorage or an equivalent simple persistence mechanism

---

## 3. Scope Definition

### 3.1 In Scope

The following items are included in the project scope:

1. Creating study tasks
2. Viewing a list of study tasks
3. Filtering or highlighting today’s study tasks
4. Editing study tasks
5. Deleting study tasks
6. Marking study tasks as completed
7. Writing reflections for study tasks
8. Providing a simple AI or mock AI reflection suggestion
9. Performing basic input validation
10. Writing and executing basic test cases
11. Recording process evidence through GitHub
12. Capturing screenshots of the software
13. Writing the final PDF report

### 3.2 Out of Scope

The following items are excluded from the required scope:

1. User registration and login
2. Multi-user synchronization
3. Real-time collaboration
4. Complex statistics dashboard
5. External calendar integration
6. Native mobile application deployment
7. Mandatory paid AI API integration
8. Push notification system
9. Server deployment automation
10. Large-scale database design

Optional features may be added only if the required features and process evidence are not compromised.

### 3.3 Priority Classification

#### Must Have

* Create study tasks
* View study task list
* Show today’s study tasks
* Mark tasks as completed
* Write reflections
* Persist data through localStorage or an equivalent mechanism
* Validate required inputs
* Provide a UI suitable for screenshots
* Record GitHub Issues, commits, Pull Requests, and Discussions
* Record test plan and test results

#### Should Have

* Edit study tasks
* Delete study tasks
* Add subject or category tags
* Provide a simple AI reflection suggestion
* Show user-friendly error messages
* Provide a responsive layout

#### Could Have

* Display completion rate
* Filter by date
* Provide simple study statistics
* Support dark mode
* Generate simple AI study advice

#### Won’t Have

* Login
* Server-based user management
* Team collaboration features
* External calendar integration
* Complex chart dashboard

---

## 4. User Scenarios

### 4.1 Scenario A: Creating a Study Task

The user creates a study task for today or for a specific date. The user can enter a task title, subject or category, study date, estimated study time, and memo. If required values are missing, the system must not save the task and must display an error message.

#### Acceptance Criteria

* When the user enters a valid title and date, the task is created.
* The created task appears immediately in the task list.
* The created task remains after refreshing the browser.
* A task with an empty title is not saved.

### 4.2 Scenario B: Checking Today’s Study Tasks

The user opens the application and checks what needs to be studied today. Tasks scheduled for today are displayed clearly, and completed and incomplete tasks are visually distinguishable.

#### Acceptance Criteria

* Today’s tasks are displayed separately or highlighted.
* Completed and incomplete tasks are visually distinguishable.
* If there are no tasks for today, an empty-state message is displayed.

### 4.3 Scenario C: Marking a Task as Completed

After finishing a study task, the user marks it as completed. The completed task is visually updated and the completion status is saved.

#### Acceptance Criteria

* Clicking the completion control changes the task status.
* The completed status remains after refreshing the browser.
* Completed tasks are visually different from incomplete tasks.

### 4.4 Scenario D: Writing a Reflection

The user writes a short reflection for a study task. The reflection may include what was difficult, what went well, and what should be improved next time.

#### Acceptance Criteria

* The user can enter and save a reflection.
* The saved reflection is connected to the relevant study task.
* The reflection remains after refreshing the browser.

### 4.5 Scenario E: Requesting an AI Reflection Suggestion

When the user has difficulty writing a reflection, the user clicks an AI suggestion button. The system generates or displays a suggested reflection sentence based on the task information.

#### Acceptance Criteria

* An AI suggestion button is available.
* A suggested reflection sentence is displayed.
* If a real AI API is not used, a mock AI response is acceptable.
* The user can edit the suggested reflection before saving it.

---

## 5. Functional Requirements

### FR-001: Create Study Task

The system shall allow the user to create a study task.

#### Details

* The user can enter a study title.
* The user can select a study date.
* The user can enter a subject or category.
* The user can enter estimated study time.
* The user can enter a memo.

#### Acceptance Criteria

* A task is created when title and date are valid.
* The created task appears in the task list.
* An error message is displayed when required values are missing.

### FR-002: View Study Task List

The system shall display registered study tasks in a list.

#### Details

* The system displays all registered tasks.
* The system allows the user to check today’s tasks.
* Completed status is visually represented.
* An empty-state message is displayed when no data exists.

#### Acceptance Criteria

* The task list reflects the latest data.
* Completed and incomplete tasks are distinguishable.
* The UI does not break when there are no tasks.

### FR-003: Edit Study Task

The system shall allow the user to edit an existing study task.

#### Details

* The user can edit the title, date, category, estimated time, and memo.
* Existing values are displayed when editing.
* Updated values are reflected in the list.

#### Acceptance Criteria

* Edited values are saved correctly.
* Edited values remain after refreshing the browser.
* Invalid values are not saved.

### FR-004: Delete Study Task

The system shall allow the user to delete unnecessary study tasks.

#### Details

* Each task provides a delete action.
* A confirmation step may be provided.
* The deleted task is immediately removed from the list.

#### Acceptance Criteria

* The deleted task no longer appears in the list.
* The deletion remains after refreshing the browser.

### FR-005: Mark Study Task as Completed

The system shall allow the user to mark a task as completed or incomplete.

#### Details

* Each task has a completion status.
* The user can toggle the completion status.
* Completed tasks are visually distinguished.

#### Acceptance Criteria

* Completion status changes immediately.
* Completion status is saved.
* Completed and incomplete tasks are visually distinguishable.

### FR-006: Write Reflection

The system shall allow the user to write a reflection for each study task.

#### Details

* The user can enter reflection text.
* The reflection is linked to a specific study task.
* The reflection can be edited.

#### Acceptance Criteria

* Reflection text is saved correctly.
* Reflection text remains after refreshing the browser.
* A suitable message is displayed when no reflection exists.

### FR-007: AI Reflection Suggestion

The system shall provide an AI-assisted reflection suggestion.

#### Details

* The user can click an AI suggestion button.
* The system generates a draft reflection based on task title, category, memo, or keywords.
* If a real AI API is not used, a mock function may be used.
* The user can edit the suggested result before saving.

#### Acceptance Criteria

* The AI suggestion button works correctly.
* A suggested reflection sentence is displayed.
* The user can modify and save the suggestion.

### FR-008: Data Persistence

The system shall persist study task and reflection data.

#### Details

* The default implementation uses localStorage.
* Data remains after browser refresh.
* The data structure remains consistent.

#### Acceptance Criteria

* Create, edit, delete, complete, and reflection updates remain after refresh.
* If stored data is corrupted, the application handles the error gracefully.

### FR-009: Study Progress Summary

The system should display a simple summary of study progress.

#### Details

* The system displays the number of today’s tasks.
* The system displays the number of completed tasks.
* The system may display a simple completion rate.

#### Acceptance Criteria

* Summary information is calculated from existing tasks.
* Summary information updates when task completion status changes.

---

## 6. Non-Functional Requirements

### NFR-001: Usability

The user should be able to use the main features without additional explanation.

#### Criteria

* Buttons and input fields use intuitive labels.
* Empty states, error states, and completed states are clearly shown.
* The user flow is simple and not overly nested.

### NFR-002: Reliability

The system should not crash due to common input errors or empty data states.

#### Criteria

* Empty task titles are blocked.
* Invalid dates are blocked or handled.
* localStorage parsing errors are handled.
* Empty data states are handled.

### NFR-003: Maintainability

The code should be organized so that features can be modified and tested easily.

#### Criteria

* UI components and data logic are separated where practical.
* Repeated logic is extracted into functions.
* Variables and functions have meaningful names.

### NFR-004: Testability

Core features should be verifiable through manual or automated tests.

#### Criteria

* Test cases are written for create, edit, delete, complete, and reflection save features.
* Main user scenarios are verified through manual testing at minimum.
* Test results are documented.

### NFR-005: Performance

The application should respond smoothly for a typical personal study task dataset.

#### Criteria

* The task list works normally with approximately 100 tasks.
* Unnecessary rendering and heavy computations are avoided.

### NFR-006: Accessibility and Responsiveness

The application should consider basic accessibility and responsive layout.

#### Criteria

* Buttons and inputs have clear labels or equivalent accessibility attributes.
* Main features are usable on mobile screen sizes.
* Status is not represented by color alone.

### NFR-007: Security and Privacy

The project does not handle sensitive personal information.

#### Criteria

* Login is not implemented.
* User-entered data is stored locally in the browser.
* If an external AI API is used, API keys are not committed to the repository.
* `.env` files are included in `.gitignore`.

---

## 7. Data Model

### 7.1 Entity: StudyTask

A StudyTask represents one study schedule item.

```json
{
  "id": "string",
  "title": "string",
  "category": "string",
  "studyDate": "YYYY-MM-DD",
  "estimatedMinutes": 60,
  "memo": "string",
  "isCompleted": false,
  "completedAt": "ISO-8601 string or null",
  "reflection": "string",
  "createdAt": "ISO-8601 string",
  "updatedAt": "ISO-8601 string"
}
```

### 7.2 Field Definitions

| Field            |        Type | Required | Description            |
| ---------------- | ----------: | -------: | ---------------------- |
| id               |      string |      Yes | Unique task identifier |
| title            |      string |      Yes | Study task title       |
| category         |      string |       No | Subject or category    |
| studyDate        |      string |      Yes | Scheduled study date   |
| estimatedMinutes |      number |       No | Estimated study time   |
| memo             |      string |       No | Additional memo        |
| isCompleted      |     boolean |      Yes | Completion status      |
| completedAt      | string/null |       No | Completion timestamp   |
| reflection       |      string |       No | Study reflection       |
| createdAt        |      string |      Yes | Creation timestamp     |
| updatedAt        |      string |      Yes | Last update timestamp  |

### 7.3 Storage Key

If localStorage is used, the default storage key is:

```text
studymate.tasks
```

### 7.4 Data Integrity Rules

1. `id` must be unique.
2. `title` must not be empty.
3. `studyDate` must be a valid date string.
4. If `isCompleted` is true, `completedAt` may contain a timestamp.
5. If `isCompleted` is false, `completedAt` may be null.
6. `updatedAt` must be updated whenever task data changes.

---

## 8. UI Structure and User Flow

### 8.1 Main UI Sections

StudyMate may be implemented as a single-page web application.

#### Sections

1. Header

   * Application name
   * Short description

2. Summary Panel

   * Number of today’s tasks
   * Number of completed tasks
   * Completion rate

3. Task Form

   * Study title input
   * Date input
   * Category input
   * Estimated time input
   * Memo input
   * Save button

4. Task Filter

   * All
   * Today
   * Completed
   * Incomplete

5. Task List

   * Task cards
   * Complete button
   * Edit button
   * Delete button
   * Reflection button or area

6. Reflection Area

   * Reflection input
   * AI suggestion button
   * Save button

### 8.2 Default User Flow

```text
Open application
→ Check today’s study summary
→ Create a study task
→ View the task in the list
→ Mark the task as completed
→ Write a reflection or request AI suggestion
→ Save the reflection
→ Reopen or refresh the app and confirm data persistence
```

### 8.3 Empty-State Messages

When no study tasks exist:

```text
No study tasks have been created yet. Add your first study plan for today.
```

When no tasks are scheduled for today:

```text
There are no study tasks scheduled for today.
```

### 8.4 Error-State Messages

When required fields are missing:

```text
Please enter both a study title and a study date.
```

When stored data cannot be parsed:

```text
There was a problem loading saved data. The application will start with an empty state.
```

---

## 9. AI Agent Usage Policy

### 9.1 Role of the AI Agent

The AI coding agent may assist with:

1. Drafting requirements
2. Decomposing feature specifications
3. Suggesting implementation plans
4. Generating component code drafts
5. Writing data utility functions
6. Drafting test cases
7. Analyzing bugs
8. Suggesting refactoring improvements
9. Drafting parts of the final report

### 9.2 Human Responsibilities

The human developer must be responsible for:

1. Finalizing requirements
2. Controlling project scope
3. Reviewing AI-generated code
4. Running tests and checking results
5. Deciding whether a bug is fixed
6. Writing or reviewing commit messages
7. Writing Pull Request descriptions
8. Finalizing the argument of the final report
9. Writing lessons learned based on actual project evidence

### 9.3 AI Agent Usage Principles

1. Do not ask the AI agent to build the entire app in one step.
2. Give the AI agent small, feature-level tasks.
3. Each instruction must include related requirements, acceptance criteria, and constraints.
4. AI-generated code must be reviewed by a human.
5. Record whether AI-generated results were accepted, modified, or rejected.
6. When errors occur, record the error message, suspected cause, fix, and retest result.
7. Record important prompts and result summaries in `docs/agent_logs.md` or in Issue/PR comments.

### 9.4 Agent Log Format

Each major AI-assisted task should be recorded using the following format:

```markdown
## YYYY-MM-DD / Task Name

### Purpose

### Agent Instruction

### Summary of Agent Output

### Human Review

### Changes or Rejections

### Test Result

### Lesson Learned
```

### 9.5 Prohibited Practices

1. Do not merge AI-generated code without review.
2. Do not include API keys or personal information in prompts.
3. Do not copy unknown external code without review.
4. Do not continuously add features outside the project scope.
5. Do not mark a feature as complete without testing.

---

## 10. Development Process

### 10.1 Overall Process

The project follows this process:

```text
Kickoff
→ Requirements Analysis
→ Project Specification
→ Spec Kit / specify Decomposition
→ Design
→ Task Breakdown
→ Feature Implementation
→ Testing
→ Quality Management
→ Screenshot Capture
→ Final Report Writing
→ Submission
```

### 10.2 Requirements Analysis Phase

#### Activities

* Define the user problem
* Identify functional requirements
* Identify non-functional requirements
* Define in-scope and out-of-scope items
* Prioritize requirements

#### Deliverables

* `docs/01_requirements.md`
* GitHub kickoff Discussion
* Related Issues

#### Completion Criteria

* Functional and non-functional requirements are separated.
* Must/Should/Could/Won’t Have priorities are defined.
* Excluded scope is clearly documented.

### 10.3 Design Phase

#### Activities

* Design screen structure
* Design data model
* Design component structure
* Decide persistence method
* Define user flow

#### Deliverables

* `docs/02_design.md`
* Wireframe or screen sketch
* Data model description

#### Completion Criteria

* Main UI sections are defined.
* Data structure is defined.
* User flow is explained.

### 10.4 Implementation Phase

#### Activities

* Create feature-level Issues
* Create feature branches
* Instruct AI agent at the feature level
* Generate and modify code
* Write commits
* Open Pull Requests

#### Deliverables

* Feature branches
* Commit history
* Pull Requests
* Agent logs

#### Completion Criteria

* Feature changes are separated by task.
* Each PR includes AI usage, human review, and test results.
* Each PR is connected to a relevant Issue.

### 10.5 Testing Phase

#### Activities

* Write test cases
* Test normal flows
* Test exception flows
* Verify data persistence after browser refresh
* Capture test evidence

#### Deliverables

* `docs/04_test_plan.md`
* Test result records
* Screenshots of test results if applicable

#### Completion Criteria

* Test cases exist for core features.
* Pass/fail results are recorded.
* Failed tests are connected to bug Issues or PR comments.

### 10.6 Quality Management Phase

#### Activities

* Review code
* Remove duplicated logic
* Remove unnecessary features
* Improve error handling
* Organize README
* Perform final execution check

#### Deliverables

* `docs/05_quality_management.md`
* Bug Issues
* Refactoring PRs
* Final test results

#### Completion Criteria

* Major bugs are fixed.
* Final software screenshots are captured.
* README includes setup and execution instructions.

### 10.7 Retrospective Phase

#### Activities

* Analyze AI agent effectiveness
* Analyze process effectiveness
* Summarize limitations and risks
* Write lessons learned

#### Deliverables

* `docs/06_lessons_learned.md`
* Final PDF report

#### Completion Criteria

* Lessons learned are written from productivity, quality, requirements management, testing, and configuration management perspectives.
* GitHub evidence is connected to the final report.

---

## 11. Version Control and Evidence Policy

### 11.1 Purpose of the GitHub Repository

The GitHub repository is not only a code repository. It is the main evidence of process application.

The repository must include:

1. Kickoff Discussion from the beginning of the project
2. Requirements analysis records
3. Feature-level Issues
4. Feature branches
5. Commit history
6. Pull Requests
7. PR discussions or review comments
8. Test results
9. Bug fix records
10. Final report and screenshots

### 11.2 Branch Strategy

Recommended branch usage:

* `main`: stable final code
* `docs/spec`: specification and documentation work
* `feature/task-form`: study task creation feature
* `feature/task-list`: task list feature
* `feature/task-status`: completion status feature
* `feature/reflection`: reflection feature
* `feature/ai-suggestion`: AI suggestion feature
* `test/core-scenarios`: test case work
* `refactor/quality-pass`: quality improvement work

### 11.3 Commit Message Rule

Recommended commit message format:

```text
type: short summary of change
```

Examples:

```text
docs: add initial project specification
feat: implement task creation form
feat: add task completion toggle
fix: handle empty title validation
refactor: separate localStorage utility functions
test: add manual test cases for task CRUD
docs: record agent prompt for reflection feature
```

### 11.4 Recording Frequency

Because the assignment requires continuous discussion and process evidence, the following recording rule should be followed:

* Write the kickoff Discussion on the project start date.
* Create Issues before implementing major features.
* Create Pull Requests after feature implementation.
* Add progress comments regularly.
* Record bugs as Issues or PR comments.
* Record test results after testing.

### 11.5 Discussion Usage

GitHub Discussions should record:

1. Why the project topic was selected
2. How the feature scope was decided
3. How the AI agent will be used
4. Periodic progress updates
5. Major design decisions
6. Reasons for scope reduction or requirement changes
7. Final retrospective

---

## 12. Test Plan

### 12.1 Purpose of Testing

The purpose of testing is to verify that AI-generated and human-modified code satisfies the requirements. Testing also provides evidence that the vibe-coded software was reviewed and validated through a structured quality process.

### 12.2 Test Scope

The test scope includes:

1. Creating study tasks
2. Viewing study tasks
3. Editing study tasks
4. Deleting study tasks
5. Marking tasks as completed
6. Writing reflections
7. AI suggestion feature
8. Data persistence
9. Input validation
10. Empty-state and error-state handling

### 12.3 Manual Test Cases

| ID     | Test Item              | Steps                           | Expected Result                             |
| ------ | ---------------------- | ------------------------------- | ------------------------------------------- |
| TC-001 | Create task            | Enter title and date, then save | Task appears in list                        |
| TC-002 | Empty title validation | Save without title              | Error message appears and task is not saved |
| TC-003 | Today’s task display   | Create task for today           | Task appears in today’s list                |
| TC-004 | Complete task          | Click complete button           | Task status changes to completed            |
| TC-005 | Save completion status | Refresh after completing task   | Completed status remains                    |
| TC-006 | Write reflection       | Enter and save reflection       | Reflection is displayed and saved           |
| TC-007 | Edit task              | Edit an existing task           | Updated values are shown                    |
| TC-008 | Delete task            | Click delete button             | Task is removed from list                   |
| TC-009 | Data persistence       | Create task and refresh browser | Task remains                                |
| TC-010 | AI suggestion          | Click AI suggestion button      | Suggested sentence is displayed             |

### 12.4 Bug Record Format

Bugs should be recorded using the following format:

```markdown
## Bug Report

### Date Found

### Related Feature

### Reproduction Steps

### Expected Result

### Actual Result

### Cause Analysis

### Fix

### Retest Result
```

### 12.5 Test Completion Criteria

Testing is complete when:

1. Major Must Have test cases pass.
2. Failed tests are recorded as Bug Issues or PR comments.
3. Fixed bugs have retest results.
4. The final report includes a test result summary.

---

## 13. Quality Management Criteria

### 13.1 Purpose of Quality Management

In AI-assisted vibe coding, generating code quickly is not enough. The generated code must be reviewed for correctness, stability, maintainability, and alignment with requirements. Therefore, this project applies explicit quality management criteria.

### 13.2 Code Quality Criteria

* Functions and components should have a single responsibility.
* Complex logic should be extracted into separate functions.
* Duplicated code should be minimized.
* Variables and functions should have meaningful names.
* Unused code should be removed.
* Unnecessary libraries should be avoided.

### 13.3 UI Quality Criteria

* The user should be able to understand the current state.
* Main action buttons should be clear.
* Error messages should be user-friendly.
* Empty states should be provided.
* Screenshots should clearly show the implemented functions.

### 13.4 Data Quality Criteria

* Data with missing required values should not be saved.
* Stored data structure should remain consistent.
* `updatedAt` should be updated when data changes.
* Delete, edit, and completion changes should be reflected in storage.

### 13.5 AI Output Review Criteria

AI-generated outputs should be reviewed using the following questions:

1. Does the output satisfy the specification?
2. Does it add unnecessary features?
3. Is it consistent with the existing code structure?
4. Does it handle invalid inputs?
5. Is it testable?
6. Is the code understandable to a human developer?
7. Does it introduce any security risk?

### 13.6 Definition of Done

A feature is considered complete only when:

1. It satisfies the related requirements.
2. It passes manual or automated tests.
3. The PR description records the change and test result.
4. AI usage and human review are documented.
5. The feature is merged into the `main` branch.

---

## 14. Deliverables

### 14.1 Software Deliverables

* Working web application
* Source code
* README with setup and execution instructions
* Screenshots of the application

### 14.2 Documentation Deliverables

* Project Specification
* Requirements document
* Design document
* Agent logs
* Test plan
* Quality management document
* Lessons learned document
* Final PDF report

### 14.3 GitHub Evidence Deliverables

* Repository URL
* Discussion records
* Issue list
* Branch history
* Commit history
* Pull Request history
* Test result records
* Screenshot files

### 14.4 Required Contents of Final PDF Report

The final report must include:

1. Project overview
2. AI agent and development environment used
3. Description of the developed software
4. Requirements analysis process
5. Design process
6. Implementation process
7. Testing and quality management process
8. GitHub configuration management and discussion records
9. Screenshots of the software output
10. Analysis of vibe coding effectiveness
11. Lessons learned from process application
12. GitHub repository URL

---

## 15. Spec Kit / specify Decomposition Plan

### 15.1 Purpose of Decomposition

This top-level specification is too broad to directly implement as one task. It should be decomposed through Spec Kit or specify into:

1. Feature Specification
2. Implementation Plan
3. Task Breakdown
4. Test Plan
5. Agent Execution Log

### 15.2 Candidate Feature Specifications

#### Feature 001: Core Study Task Management

Included features:

* Create task
* View task list
* Edit task
* Delete task
* Mark task as completed
* Persist task data through localStorage

#### Feature 002: Study Reflection

Included features:

* Enter reflection
* Edit reflection
* Save reflection
* Connect reflection to study task

#### Feature 003: AI Reflection Suggestion

Included features:

* AI suggestion button
* Mock AI suggestion function
* Display suggested reflection
* Allow user editing before save

#### Feature 004: Testing and Quality Management

Included features:

* Write test cases
* Execute manual tests
* Record defects
* Refactor code
* Perform final quality check

### 15.3 Task Decomposition Principles

* Each task must have one clear completion criterion.
* Each Pull Request should focus on one feature or document change where possible.
* AI agent tasks should be small enough to review within a reasonable time.
* Each task must reference related requirement IDs.
* Each task result must be verified through testing or review.

---

## 16. Development Environment

### 16.1 Recommended Technology Stack

Recommended stack:

* Frontend: React or Next.js
* Language: TypeScript
* Styling: CSS Modules, Tailwind CSS, or basic CSS
* Storage: localStorage
* Testing: Manual testing and, if possible, Vitest / React Testing Library
* Version control: Git and GitHub
* AI agent: Cursor, Claude Code, GitHub Copilot, ChatGPT, Gemini CLI, or another selected AI coding agent

### 16.2 Technology Selection Criteria

The selected stack should:

* Be feasible within the assignment period.
* Allow focus on process application and documentation.
* Be easy to run and screenshot.
* Support testing and refactoring.

### 16.3 Environment Variable Policy

If an external AI API is used:

* Store API keys in `.env`.
* Do not commit `.env` to GitHub.
* Include only variable names in `.env.example`.
* If API usage is difficult, use a mock AI feature instead.

---

## 17. Risks and Mitigation Strategies

### 17.1 Risk: Excessive Feature Scope

#### Description

The AI agent may suggest many additional features, which can make the project too large.

#### Mitigation

* Implement Must Have features first.
* Keep statistics, dark mode, and external integration as optional features.
* Record scope changes and reasons in GitHub Discussions.

### 17.2 Risk: Uncertain Quality of AI-Generated Code

#### Description

AI-generated code may appear to work but may lack exception handling, maintainability, or testability.

#### Mitigation

* Review every PR manually.
* Verify requirement satisfaction with test cases.
* Record review comments in PRs.

### 17.3 Risk: Insufficient Process Records

#### Description

The assignment requires evidence of continuous discussion and process application. A final product alone is not enough.

#### Mitigation

* Write a kickoff Discussion at the beginning.
* Create feature-level Issues.
* Add progress comments regularly.
* Record AI usage, review, and test results in PRs.

### 17.4 Risk: Appearing to Have Worked Only at the Last Minute

#### Description

If GitHub activity is concentrated on one date, the project may appear to have been completed all at once.

#### Mitigation

* Record actual progress on each working date.
* Commit documents, code, tests, and reflections step by step.
* Record decisions in Discussions.

### 17.5 Risk: Real AI API Integration Failure

#### Description

A real AI API may be difficult to use due to API keys, cost, or network issues.

#### Mitigation

* Design mock AI suggestion as the default fallback.
* Explain the reason for using mock AI in the report if necessary.
* Emphasize that the AI coding agent is used in the development process even if the product uses mock AI internally.

---

## 18. Success Criteria

### 18.1 Product Success Criteria

The product is successful when:

1. The user can create a study task.
2. The user can check today’s study tasks.
3. The user can mark a study task as completed.
4. The user can write and save a reflection.
5. The user can receive an AI or mock AI suggestion.
6. Core data remains after browser refresh.
7. The UI can be captured for the final report.

### 18.2 Process Success Criteria

The process is successful when:

1. A requirements analysis document exists.
2. A design document exists.
3. Feature-level Issues exist.
4. Feature-level Pull Requests exist.
5. AI usage records exist.
6. Test plan and test results exist.
7. Quality management records exist.
8. Lessons learned can be explained in the final report.
9. The GitHub repository can serve as process evidence.

### 18.3 Report Success Criteria

The final report should answer:

1. What software was developed?
2. Why was this software selected?
3. Which AI agent was used?
4. How was requirements analysis performed?
5. How were design and implementation connected?
6. How were AI-generated results reviewed?
7. What tests were performed?
8. What quality management activities were performed?
9. What evidence exists in GitHub?
10. What are the effects and limitations of process-based vibe coding?

---

## 19. Draft Argument for the Final Report

The central argument of the final report will be:

```text
This project confirmed that vibe coding with an AI coding agent can improve initial implementation productivity. However, AI-generated code may include risks such as missing requirements, weak exception handling, and inconsistent structure. To reduce these risks, this project applied a specification-driven development process. Requirements were defined first, tasks were decomposed into feature-level units, and implementation, review, testing, and quality management activities were recorded through GitHub Issues and Pull Requests. As a result, the project was able to benefit from the speed of AI-assisted development while keeping human control over requirements, testing, and quality.
```

### 19.1 Expected Lessons Learned

1. A clear specification is the most important control mechanism for an AI coding agent.
2. Feature-level task decomposition improves reviewability of AI-generated code.
3. Testing and quality management cannot be skipped in vibe coding.
4. GitHub Issues and Pull Requests are effective evidence of the development process.
5. AI improves implementation speed, but the final responsibility remains with the human developer.
6. A structured process does not restrict vibe coding; it makes vibe coding more reliable.

---

## 20. Immediate Execution Checklist

### 20.1 Tasks for the Project Start Date

* [ ] Create GitHub repository
* [ ] Write initial README
* [ ] Add this specification document
* [ ] Create kickoff Discussion
* [ ] Create requirements analysis Issue
* [ ] Prepare Spec Kit or specify
* [ ] Create first commit

### 20.2 Tasks Before Implementation

* [ ] Generate Feature Specification
* [ ] Generate Implementation Plan
* [ ] Generate Task Breakdown
* [ ] Create Issues for each task
* [ ] Decide branch strategy

### 20.3 Tasks During Implementation

* [ ] Give feature-level instructions to the AI agent
* [ ] Record prompts
* [ ] Review generated output
* [ ] Record modifications
* [ ] Record test results
* [ ] Open Pull Requests

### 20.4 Tasks Before Submission

* [ ] Capture application screenshots
* [ ] Capture test result evidence
* [ ] Organize GitHub Issues, PRs, and Discussions
* [ ] Write Lessons Learned
* [ ] Write final PDF report
* [ ] Verify repository URL

---

## 21. Change History

| Version | Date       | Change                                | Author         |
| ------- | ---------- | ------------------------------------- | -------------- |
| v0.1    | 2026-05-07 | Initial project specification written | Project author |

---

## 22. Final Confirmation

This specification is ready to be used when:

* The project purpose is clear.
* The software product is defined.
* Functional and non-functional requirements are separated.
* Included and excluded scopes are clear.
* User scenarios and acceptance criteria are defined.
* The data model is defined.
* AI agent usage principles are included.
* Development process and version control policy are included.
* Testing and quality management criteria are included.
* The final report argument and lessons learned direction are included.

This document should now be used as the baseline for Spec Kit or specify. All implementation work should be tracked through GitHub Issues and Pull Requests.
