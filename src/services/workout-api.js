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
    return fetch(BASE_URL, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function deleteWorkout(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function update(workout) {
    return fetch(`${BASE_URL}${workout._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(workout)
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function getTimeFromTimestamp(t){
    var dt = new Date(t*1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}