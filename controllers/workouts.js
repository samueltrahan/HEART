const Workout = require('../models/workout');



module.exports = {
    create,
    index,
}

function create(req, res) {
    req.body.user = req.user._id
    Workout.create(req.body)
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)});
}

function index(req, res) {
    Workout.find({})
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)})
}