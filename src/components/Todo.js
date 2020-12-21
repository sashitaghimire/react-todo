import React, { useState } from 'react';
import TodoForm from './TodoForm';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      

    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <input type="checkbox" onClick={() => completeTodo(todo.id)}/>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text} 
      </div>
      <div className='icons'>
      <EditIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <HighlightOffIcon
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        
      </div>
    </div>
  ));
};

export default Todo;
