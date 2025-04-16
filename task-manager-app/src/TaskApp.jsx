import React, { useState } from "react";
import "./index.css";
const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app-background">
      <div className="task-container">
        <h1 className="task-title">Task Manager App</h1>

        <div className="task-input-group">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            placeholder="Add new task"
            className="task-input"
          />
          <button onClick={handleAddTask} className="task-button">
            Add
          </button>
        </div>

        <div className="task-section">
          {/* Pending Tasks */}
          <h3 className="section-header">Pending</h3>
          {pendingTasks.length === 0 ? (
            <p className="empty-text">No pending tasks!</p>
          ) : (
            pendingTasks.map((task) => (
              <div key={task.id} className="task-card">
                <input
                  type="checkbox"
                  onChange={() => handleToggleTask(task.id)}
                  checked={task.completed}
                  style={{ marginRight: "10px" }}
                />
                <span
                  onClick={() => handleToggleTask(task.id)}
                  className="task-text"
                  style={{ flex: 1 }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="delete-button"
                >
                  ✕
                </button>
              </div>
            ))
          )}

          {/* Completed Tasks */}
          <h3 className="section-header">Completed</h3>
          {completedTasks.length === 0 ? (
            <p className="empty-text">No completed tasks yet.</p>
          ) : (
            completedTasks.map((task) => (
              <div key={task.id} className="task-card completed">
                <input
                  type="checkbox"
                  onChange={() => handleToggleTask(task.id)}
                  checked={task.completed}
                  style={{ marginRight: "10px" }}
                />
                <span
                  onClick={() => handleToggleTask(task.id)}
                  className="task-text completed-text"
                  style={{ flex: 1 }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="delete-button"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default TaskApp;
