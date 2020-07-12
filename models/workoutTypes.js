// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const workoutTypes = new Schema({
//     upperBody: {
//         type: String,
//         enum: ['Bench Press', 'Incline Bench', 'Decline Bench', 'Flys'],
//         required: true
//     },
//     lowerBody: {
//         type: String,
//         enum: ['Squats', 'Deadlifts', 'Leg Press', 'Quad Curls', 'Hamstring Curls', 'Lunges', 'Butt Presses'],
//         required: true
//     },
//     arms: {
//         type: String,
//         enum: ['Bicep Curls', 'Hammer Curls', 'Shoulder Press', 'Shoulder Raises', 'Curls'],
//         required: true
//     },
//     back: {
//         type: String,
//         enum: ['Pull Up', 'Inverted Row', 'Lat Pull Downs', 'Kettlebell Swings', 'Bent Over Row', 'Dumbell Single Arm Row', 'Farmer Walks',],
//         required: true
//     },
//     cardio: {
//         type: String,
//         enum: ['Run', 'Stair Master', 'Biking', 'Rows'],
//         required: true
//     },
//     abs: {
//         type: String,
//         enum: ['Planks', 'Crunches', 'Roll Outs'],
//         required: true
//     },
//     reps: {
//         type: Number,
//         required: true
//     },
// }, {
//     timestamps: true
// })

// module.exports = mongoose.model('Workout Types', workoutTypes)