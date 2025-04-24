import React, { Component } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

const AddForm = styled.form`
  display: flex;
  margin-bottom: 16px;
`;

const AddInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #2ecc71;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`;

class TaskList extends Component {
  // Static array to hold tasks
  static tasks = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a to-do app' },
    { id: 3, text: 'Profit!' },
  ];

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleDelete = (id) => {
    TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
    this.forceUpdate();
  };

  handleAdd = (e) => {
    e.preventDefault();
    const input = this.inputRef.current;
    const text = input.value.trim();
    if (text) {
      const nextId = TaskList.tasks.length
        ? Math.max(...TaskList.tasks.map(t => t.id)) + 1
        : 1;
      TaskList.tasks.push({ id: nextId, text });
      input.value = '';
      this.forceUpdate();
    }
  };

  render() {
    return (
      <ListContainer>
        <AddForm onSubmit={this.handleAdd}>
          <AddInput
            type="text"
            placeholder="Нове завдання..."
            ref={this.inputRef}
          />
          <AddButton type="submit">Додати</AddButton>
        </AddForm>

        {TaskList.tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          TaskList.tasks.map(task => (
            <TaskItem key={task.id}>
              <span>{task.text}</span>
              <DeleteButton onClick={() => this.handleDelete(task.id)}>
                Видалити
              </DeleteButton>
            </TaskItem>
          ))
        )}
      </ListContainer>
    );
  }
}

export default TaskList;
