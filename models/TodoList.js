const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Todos', todolistSchema);