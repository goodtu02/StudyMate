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
    await userEvent.type(screen.getByLabelText(/Title \*/i), title);
    await userEvent.type(screen.getByLabelText(/Date \*/i), date);
    await userEvent.click(screen.getByRole('button', { name: /Save Task/i }));
  };

  it('TC-001: Create task - valid', async () => {
    render(<App />);
    await createTask('Learn React Testing');
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
  });

  it('TC-002: Empty title validation', async () => {
    render(<App />);
    const saveButton = screen.getByRole('button', { name: /Save Task/i });

    // No title typed, just save
    await userEvent.click(saveButton);
    expect(screen.getByText('Please enter both a study title and a study date.')).toBeInTheDocument();
  });

  it('TC-003: Today\'s task display', async () => {
    render(<App />);
    const today = new Date().toISOString().split('T')[0];
    await createTask('Today Task', today);

    await userEvent.click(screen.getByRole('button', { name: /^Today$/i }));
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

    const textarea = screen.getByPlaceholderText(/What did you learn/i);
    await userEvent.type(textarea, 'This was hard.');
    await userEvent.click(screen.getByRole('button', { name: /Save Reflection/i }));

    expect(screen.getByText('✓ Reflection saved')).toBeInTheDocument();
    
    const stored = JSON.parse(localStorage.getItem('studymate_tasks') || '[]');
    expect(stored[0].reflection).toBe('This was hard.');
  });

  it('TC-007: Edit task', async () => {
    render(<App />);
    await createTask('Edit Me');

    await userEvent.click(screen.getByRole('button', { name: /Edit/i }));
    
    // Find the edit input (it has the value 'Edit Me')
    const editInputs = screen.getAllByDisplayValue('Edit Me');
    const editField = editInputs.find(i => i.tagName === 'INPUT')!;
    
    await userEvent.clear(editField);
    await userEvent.type(editField, 'Edited Task');
    // Save button inside the task card
    await userEvent.click(screen.getByRole('button', { name: /Update Task/i }));

    expect(screen.getByText('Edited Task')).toBeInTheDocument();
    expect(screen.queryByText('Edit Me')).not.toBeInTheDocument();
  });

  it('TC-008: Delete task', async () => {
    const confirmSpy = vi.spyOn(window, 'confirm').mockImplementation(() => true);
    render(<App />);
    await createTask('Delete Me');

    expect(screen.getByText('Delete Me')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /Delete/i }));
    
    expect(confirmSpy).toHaveBeenCalled();
    expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
    confirmSpy.mockRestore();
  });

  it('TC-010: AI suggestion', async () => {
    render(<App />);
    await createTask('AI Task');

    const aiButton = screen.getByRole('button', { name: /✨ AI Suggestion/i });
    await userEvent.click(aiButton);

    expect(aiButton).toHaveTextContent('Generating...');
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/What did you learn/i)).toHaveValue('Today I studied AI Task in general. I worked on the planned study.');
    }, { timeout: 2000 });
  });
});
