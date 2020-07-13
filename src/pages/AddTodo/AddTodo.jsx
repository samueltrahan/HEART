import React, {useState, useEffect, useRef} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import TodoList from '../TodoList/TodoList'
import todoAPI from '../../services/todo-api'

export default function AddTodo({handleAddTodo}) {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef();

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete
        setTodos(newTodos);
    }

    function handleTodoAdd(e) {
        const name = todoNameRef.current.value;
        if(name === '') return;
        setTodos((prevTodos) => {
            return [...prevTodos, {id: todos._id, name: name, completed: false}]
        })
    }

    handleAddTodo = async newTodoData => {
        const newTodo = await todoAPI.create(newTodoData);
        setTodos(state => ({
            todos: [...todos, newTodo]
        }))
    }

    return (
        <>
            <NavBar />
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <h2>Get Done List</h2>
            <form>
            <input ref={todoNameRef} type="text" />
            <button onClick={handleTodoAdd}>Add to List</button>
            {/* <button onClick={handleDeleteTodo}></button> */}
            <div><h3>{todos.filter(todo => !todo.complete).length} left to do</h3></div>
            </form>
        </>
    )
}
