const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    workouts: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema);