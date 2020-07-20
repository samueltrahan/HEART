import React from 'react'
import Todo from '../Todo/Todo'

export default function TodoList({todos, toggleTodo, handleDeleteTodo}) {
    return (
    
            todos.map(todo => {
                return <Todo key={todos.id} toggleTodo={toggleTodo} todo={todo} handleDeleteTodo={handleDeleteTodo}/>
            })
    )
}
