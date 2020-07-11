const BASE_URL = '/api/workouts/'

export function create(workout) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(workout)
    }, {mode: 'cors'})
    .then(res => res.json())
}