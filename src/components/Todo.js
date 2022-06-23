import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {AiFillDelete} from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti';
import {IoMdDoneAll} from 'react-icons/io'
import Card from '../UI/Card';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    status:'',
    date:'',
  });

  const submitUpdate = (value,status,date) => {
    updateTodo(edit.id, value, status, date);
    setEdit({
      id: null,
      value: '',
      status:'',
      date:'',
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
    <Card className='todo-item' key={todo.id}>
        <div className='todo-item-date'>
          {todo.date}
        </div>
        <div className='todo-item-description'>
          {todo.input}
        </div>
        <div className='todo-item-status'>
          {todo.status}
        </div>
    </Card>
    <div className='icons'>
      <TiEdit
        onClick={() => setEdit({ id: todo.id, value: todo.input , date:todo.date, status: todo.status})}
        className='edit-icon'
      />
      <IoMdDoneAll
        onClick={() => completeTodo(todo.id)}
        className='completed-icon'
      />
       <AiFillDelete
        onClick={() => removeTodo(todo.id)}
        className='delete-icon'
      />
    </div>
  </div>
  ));
};

export default Todo;