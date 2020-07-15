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