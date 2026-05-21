import { useState, useEffect } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { FilterBar, FilterType } from './components/FilterBar';
import { TaskList } from './components/TaskList';
import { StudyTask } from './models/StudyTask';
import { loadTasks, saveTasks } from './services/storage';

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

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1>StudyMate</h1>
        <p>An AI-Assisted Personal Study Schedule and Reflection Web Application</p>
      </header>
      <main>
        <TaskForm onSave={handleSaveTask} />
        
        <div className="task-list-preview" style={{ marginTop: '2rem' }}>
          <h2>Task List Preview</h2>
          <FilterBar currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
          
          <TaskList tasks={tasks} />
        </div>
      </main>
    </div>
  );
}

export default App;
