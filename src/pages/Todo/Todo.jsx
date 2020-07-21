import React, {useEffect} from 'react'

export default function Todo({todo, toggleTodo, handleDeleteTodo, handleUpdateTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    useEffect(() => {
        handleUpdateTodo(todo)
    }, [todo, handleUpdateTodo])

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            <span className="todo-item">{todo.name}</span>
            </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn red" onClick={() => handleDeleteTodo(todo.id)}>
                    <i className="material-icons left small">delete</i> 
            </button>
        </div>
    )
}
