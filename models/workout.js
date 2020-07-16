const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    strengthTraining: {
        type: [],
    },
    cardio: {
        type: []
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema);