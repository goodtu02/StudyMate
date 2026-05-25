import { useState, useEffect } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { FilterBar, FilterType } from './components/FilterBar';
import { TaskList } from './components/TaskList';
import { SummaryPanel } from './components/SummaryPanel';
import { StudyTask } from './models/StudyTask';
import { loadTasks, saveTasks, updateTask, deleteTask } from './services/storage';
import { isToday } from './utils/dateUtils';

function App() {
  const [tasks, setTasks] = useState<StudyTask[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('All');

  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  }, []);

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

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1>StudyMate</h1>
        <p>An AI-Assisted Personal Study Schedule and Reflection Web Application</p>
      </header>
      <main>
        <SummaryPanel tasks={tasks} />
        
        <TaskForm onSave={handleSaveTask} />
        
        <div className="task-list-preview" style={{ marginTop: '2rem' }}>
          <h2>Task List Preview</h2>
          <FilterBar currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
          
          <TaskList 
            tasks={filteredTasks} 
            onUpdateTask={handleUpdateTask} 
            onDeleteTask={handleDeleteTask} 
            onToggleTask={handleToggleTask} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;
