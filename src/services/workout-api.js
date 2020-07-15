import tokenService from './tokenService'

const BASE_URL = '/api/workouts/'

export function create(workout) {
    console.log(workout)
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json','Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(workout)
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function getAll() {
    return fetch(BASE_URL, {mode: 'cors'})
    .then(res => res.json())
}

export function deleteWorkout(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function update(workout) {
    return fetch(`${BASE_URL}${workout._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(workout)
    }, {mode: 'cors'})
    .then(res => res.json())
}