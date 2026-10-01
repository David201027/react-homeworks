import React from "react";
import './TaskList.css';

class TaskList extends React.Component {
    static tasks = [
        { id: 1, text: 'Task 1'},
        { id: 2, text: 'Task 2'},
        { id: 3, text: 'Task 3'},
    ];

    deleteTask = id => {
        TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
        this.forceUpdate();
    }

        render() {
    return (
      <div className="task-list">
        <h1>Task List</h1>

        {TaskList.tasks.length === 0 ? (
          <p className="empty-message">No tasks</p>
        ) : (
          <ul>
            {TaskList.tasks.map(task => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>

                <button
                  type="button"
                  onClick={() => this.deleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TaskList;