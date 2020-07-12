const Workout = require('../models/workout');
// const WorkoutType = require('../models/workoutTypes');


module.exports = {
    create,
    index,
}

function create(req, res) {
    Workout.create(req.body)
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)});
}

function index(req, res) {
    Workout.find({})
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)})
}