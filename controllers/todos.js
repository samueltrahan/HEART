const Todo = require('../models/todoList');


module.exports = {
    create,
    index,
    delete: deleteTodo,
}

function create(req, res) {
    req.body.user = req.user._id
    Todo.create(req.body)
    .then(todo => {res.json(todo)})
    .catch(err => {res.json(err)});
}

function index(req, res) {
    Todo.find({})
    .then(todo => {res.json(todo)})
    .catch(err => {res.json(err)})
}

function deleteTodo(req, res) {
    Todo.findById(req.params.id)
    .then(todo => {res.json(todo)})
    .catch(err => {res.json(err)})
}