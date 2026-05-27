import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { FilterBar, type FilterType } from './components/FilterBar';
import { TaskList } from './components/TaskList';
import { SummaryPanel } from './components/SummaryPanel';
import type { StudyTask } from './models/StudyTask';
import { loadTasks, saveTasks, updateTask, deleteTask } from './services/storage';
import { isToday } from './utils/dateUtils';

function App() {
  const [tasks, setTasks] = useState<StudyTask[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('All');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('studymate_theme');
    if (saved) return saved === 'dark';
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('studymate_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('studymate_theme', 'light');
    }
  }, [isDarkMode]);

  const handleSaveTask = (newTask: StudyTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleUpdateTask = (id: string, changes: Partial<StudyTask>) => {
    const updatedTasks = updateTask(id, changes);
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = deleteTask(id);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (id: string) => {
    const targetTask = tasks.find(t => t.id === id);
    if (targetTask) {
      const updatedTasks = updateTask(id, { isCompleted: !targetTask.isCompleted });
      setTasks(updatedTasks);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    switch (currentFilter) {
      case 'Today':
        return isToday(task.date);
      case 'Completed':
        return task.isCompleted;
      case 'Incomplete':
        return !task.isCompleted;
      case 'All':
      default:
        return true;
    }
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <SummaryPanel tasks={tasks} />
          <TaskForm onSave={handleSaveTask} />
        </aside>
        
        <section className="dashboard-content">
          <div className="task-list-section glass-card">
            <div className="list-controls-row">
              <h2>Study Schedule</h2>
              <FilterBar currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
            </div>
            
            <TaskList 
              tasks={filteredTasks} 
              onUpdateTask={handleUpdateTask} 
              onDeleteTask={handleDeleteTask} 
              onToggleTask={handleToggleTask} 
              emptyMessage={
                tasks.length === 0 
                  ? 'No study tasks have been created yet. Add your first study plan for today.'
                  : `No tasks found for the "${currentFilter}" filter.`
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
