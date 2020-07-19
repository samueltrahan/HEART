const Workout = require('../models/workout');



module.exports = {
    create,
    index,
    delete: deleteWorkout,
    show,
    update,
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

function deleteWorkout(req, res) {
    Workout.findById(req.params.id)
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Workout.findById(req.params.id)
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    console.log(req.body)
    Workout.findByIdAndUpdate(req.params.id, res.body, {new: true})
    .then(workout => {res.json(workout)})
    .catch(err => {res.json(err)})
}