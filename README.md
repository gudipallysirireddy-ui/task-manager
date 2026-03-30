##  Objective
To build a modern, fully functional **task manager application** using React.js and React hooks, implementing **CRUD operations, state management, and persistent storage**.

---

##  Technologies Used
- React.js (Functional Components + Hooks)  
- HTML5 & CSS3  
- JavaScript (ES6+)  
- Local Storage  
- Flexbox & CSS Modules for styling  

---

##  Project Structure


react-task-manager/
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ ├── App.css
│ └── components/
│ ├── TaskInput.js
│ ├── TaskList.js
│ └── TaskItem.js
├── package.json
└── README.md


---

## ✨ Features
- Add new tasks with timestamp  
- Edit existing tasks  
- Delete tasks  
- Mark tasks as completed  
- Filter tasks: All / Active / Completed  
- Data persistence using **Local Storage**  
- Reusable and modular components (TaskInput, TaskList, TaskItem)  
- Responsive layout and basic styling  

---

## 🛠️ Hands-On Practice
1. **Set up React development environment** using `create-react-app`  
2. **Create first React component** with JSX  
3. **Build counter app** using `useState` hook  
4. **Create to-do list app** with state management  
5. **Fetch and display data from API** using `useEffect`  
6. **Build simple e-commerce product listing**  

---

## 📋 Step-by-Step Guide

| Day | Task |
|-----|------|
| 1 | React Setup – Install Node.js, create React app, understand project structure |
| 2 | Components & JSX – Create first components, understand JSX syntax |
| 3 | State Management – Use `useState` hook for task management |
| 4 | Effects & Data – Use `useEffect` for Local Storage |
| 5 | Features – Add filtering, editing, task categories |
| 6 | UI/UX – Style with CSS modules, add animations |
| 7 | Deployment – Build and deploy to Netlify/Vercel |

---

## 💻 Sample Code (App.js)
```jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = { id: Date.now(), text: inputValue, completed: false };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskManager;
##screenshots

