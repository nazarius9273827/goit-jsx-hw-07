import React from "react";
import "./TaskList.css";

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: "Купити молоко" },
    { id: 2, text: "Прочитати книгу" },
    { id: 3, text: "Написати код" },
  ];

  handleDelete = (taskId) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== taskId);
    this.forceUpdate(); // Використовується для оновлення компонента без стану
  };

  render() {
    return (
      <div className="task-list">
        <h2>Список завдань</h2>
        <ul>
          {TaskList.tasks.map((task) => (
            <li key={task.id} className="task-item">
              {task.text}
              <button className="delete-btn" onClick={() => this.handleDelete(task.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
