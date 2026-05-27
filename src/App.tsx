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
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      setGreeting('좋은 아침입니다! 오늘도 활기찬 학습을 시작해볼까요? ☀️');
    } else if (hours >= 12 && hours < 18) {
      setGreeting('안녕하세요! 오늘 계획한 학습 목표를 향해 나아가봅시다 📚');
    } else {
      setGreeting('오늘 하루도 수고 많으셨습니다! 차분하게 오늘의 공부를 돌아볼까요? 🌙');
    }
  }, []);

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
          {greeting && (
            <div className="welcome-banner glass-card animate-fade-in">
              <p>{greeting}</p>
            </div>
          )}
          
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
