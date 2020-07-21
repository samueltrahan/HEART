import tokenService from './tokenService'

const BASE_URL = '/api/todos/'

export function create(todo) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(todo)
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function deleteTodo(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function update(todo) {
    return fetch(`${BASE_URL}${todo.id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(todo)
    }, {mode: 'cors'})
    .then(res => res.json())
}