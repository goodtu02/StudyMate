import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';

describe('StudyMate Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const createTask = async (title: string, date: string = '2026-05-27') => {
    await userEvent.type(screen.getByLabelText(/제목 \*/i), title);
    await userEvent.type(screen.getByLabelText(/날짜 \*/i), date);
    await userEvent.click(screen.getByRole('button', { name: /태스크 저장/i }));
  };

  it('TC-001: Create task - valid', async () => {
    render(<App />);
    await createTask('Learn React Testing');
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
  });

  it('TC-002: Empty title validation', async () => {
    render(<App />);
    const saveButton = screen.getByRole('button', { name: /태스크 저장/i });

    // No title typed, just save
    await userEvent.click(saveButton);
    expect(screen.getByText('학습 제목과 날짜를 모두 입력해주세요.')).toBeInTheDocument();
  });

  it('TC-003: Today\'s task display', async () => {
    render(<App />);
    const today = new Date().toISOString().split('T')[0];
    await createTask('Today Task', today);

    await userEvent.click(screen.getByRole('button', { name: /^오늘$/i }));
    expect(screen.getByText('Today Task')).toBeInTheDocument();
  });

  it('TC-004 & TC-005: Complete task and persistence', async () => {
    const { unmount } = render(<App />);
    await createTask('Completable Task');

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    unmount();
    render(<App />);
    const restoredCheckbox = screen.getByRole('checkbox');
    expect(restoredCheckbox).toBeChecked();
  });

  it('TC-006: Write reflection', async () => {
    render(<App />);
    await createTask('Reflection Task');

    const textarea = screen.getByPlaceholderText(/무엇을 배웠나요/i);
    await userEvent.type(textarea, 'This was hard.');
    await userEvent.click(screen.getByRole('button', { name: /회고 저장/i }));

    expect(screen.getByText(/회고가 저장되었습니다/i)).toBeInTheDocument();
    
    const stored = JSON.parse(localStorage.getItem('studymate_tasks') || '[]');
    expect(stored[0].reflection).toBe('This was hard.');
  });

  it('TC-007: Edit task', async () => {
    render(<App />);
    await createTask('Edit Me');

    await userEvent.click(screen.getByRole('button', { name: /수정/i }));
    
    // Find the edit input (it has the value 'Edit Me')
    const editInputs = screen.getAllByDisplayValue('Edit Me');
    const editField = editInputs.find(i => i.tagName === 'INPUT')!;
    
    await userEvent.clear(editField);
    await userEvent.type(editField, 'Edited Task');
    // Save button inside the task card
    await userEvent.click(screen.getByRole('button', { name: /태스크 수정/i }));

    expect(screen.getByText('Edited Task')).toBeInTheDocument();
    expect(screen.queryByText('Edit Me')).not.toBeInTheDocument();
  });

  it('TC-008: Delete task', async () => {
    const confirmSpy = vi.spyOn(window, 'confirm').mockImplementation(() => true);
    render(<App />);
    await createTask('Delete Me');

    expect(screen.getByText('Delete Me')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /삭제/i }));
    
    expect(confirmSpy).toHaveBeenCalled();
    expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
    confirmSpy.mockRestore();
  });

  it('TC-010: AI suggestion', async () => {
    render(<App />);
    await createTask('AI Task');

    const aiButton = screen.getByRole('button', { name: /AI 제안/i });
    await userEvent.click(aiButton);

    expect(aiButton).toBeDisabled();
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/무엇을 배웠나요/i)).toHaveValue('오늘 일반 과목의 "AI Task" 학습을 진행했습니다. 아직 진행 중인 학습입니다. 내일도 꾸준히 이어가 봅시다!');
    }, { timeout: 2000 });
  });
});
