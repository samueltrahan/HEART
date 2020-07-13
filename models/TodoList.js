const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Todos', todolistSchema);