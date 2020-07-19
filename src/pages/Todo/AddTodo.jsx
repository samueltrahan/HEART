import React, { useState, useEffect, useRef } from 'react';
import TodoList from '../TodoList/TodoList';
import {v4 as uuid} from 'uuid';

export default function AddTodo({ handleAddTodo }) {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  

  useEffect(() => {

  }, [])


  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleDisplayingTodoList(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, completed: false }];
    });
  }

  return (
    <>
      <h2>Get Done List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <form>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleDisplayingTodoList}>Add to List</button>
        {/* <button onClick={handleDeleteTodo}></button> */}
        <div>
          <h3>{todos.filter(todo => !todo.complete).length} left to do</h3>
        </div>
      </form>
    </>
  );
}
