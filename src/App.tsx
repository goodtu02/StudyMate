import { useState, useEffect } from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { StudyTask } from './models/StudyTask';
import { loadTasks, saveTasks } from './services/storage';

function App() {
  const [tasks, setTasks] = useState<StudyTask[]>([]);

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
          {tasks.length === 0 ? (
            <p>No study tasks have been created yet. Add your first study plan for today.</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <strong>{task.title}</strong> ({task.date}) - {task.isCompleted ? 'Done' : 'Pending'}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
