import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
  if (filter === 'completed') return task.completed;
  if (filter === 'pending') return !task.completed;
  return true;
});
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Task Manager ✅</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      {tasks.map(task => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span style={{
            textDecoration: task.completed ? 'line-through' : 'none'
          }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
<div>
  <button onClick={() => setFilter('all')}>All</button>
  <button onClick={() => setFilter('completed')}>Completed</button>
  <button onClick={() => setFilter('pending')}>Pending</button>
</div>
export default App;