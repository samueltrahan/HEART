import React from 'react'

export default function Todo({todo, toggleTodo, handleDeleteTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            <span className="todo-item">{todo.name}</span>
            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit" className="btn red" onClick={() => handleDeleteTodo(todo._id)}>
                    <i className="material-icons left small">delete</i> 
            </button>
        </div>
    )
}
