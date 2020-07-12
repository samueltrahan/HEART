const Todo = require('../models/TodoList');


module.exports = {
    create,
    index,
}

function create(req, res) {
    Todo.create(req.body)
    .then(todo => {res.json(todo)})
    .catch(err => {res.json(err)});
}

function index(req, res) {
    Todo.find({})
    .then(todo => {res.json(todo)})
    .catch(err => {res.json(err)})
}