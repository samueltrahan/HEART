import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import {v4 as uuid} from 'uuid';
import './TodoList.css'

export default function AddTodo({ handleAddTodo, todos }) {
  const [addedTodos, setAddedTodos] = useState(todos);
  const [todoInput, setTodoInput] = useState('');
  

function toggleTodo(id) {
  const newTodos = addedTodos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo, 
        completed: !todo.completed
      }
    } 
    return todo
    });
  setAddedTodos(newTodos);
  }
  
function handleSubmit(event) {
  event.preventDefault();
  console.log(addedTodos)
  handleAddTodo(addedTodos)
}

function handleChange(event) {
  setTodoInput(event.target.value);
}

function handleDisplayingTodoList(event) {

  setAddedTodos((prevTodos) => {
    return [...prevTodos, {id: uuid(), name: todoInput, completed: false}]
  });
  setTodoInput('')
}


  return (
    <>
      <h2>Get Done List</h2>
      <form onSubmit={handleSubmit}>
      <TodoList todos={addedTodos} toggleTodo={toggleTodo} />
        <input className="todo-input" onChange={handleChange} value={todoInput} type="text" />
        <button onClick={handleDisplayingTodoList} type="button" className="btn-floating btn-large waves-effect waves-light green" href=""><i class="material-icons">add</i></button> <br/>
          <h3>{addedTodos.filter(todo => !todo.complete).length} left to do</h3>
        <button class="btn waves-effect waves-light" type="submit" name="action">Update List
        <i class="material-icons right">send</i>
        </button>
      </form>
    </>
  );
}
