const Workout = require('../models/workout');

module.exports = {
    create,
}

function create(req, res) {
    Workout.create(req.body)
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)});
}