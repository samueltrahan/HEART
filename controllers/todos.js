const Todo = require('../models/todoList');


module.exports = {
    create,
    index,
}

function create(req, res) {
    req.body.user = req.user._id
    Todo.create(req.body)
    .then(todo => {res.json(todo)})
    .catch(err => {res.json(err)});
}

function index(req, res) {
    req.body.user = req.user._id
    Todo.find({})
    .then(todo => {res.json(todo)})
    .catch(err => {res.json(err)})
}