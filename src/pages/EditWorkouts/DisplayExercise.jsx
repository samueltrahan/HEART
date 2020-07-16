import React from 'react'
import Exercise from './Exercise'
import CardioExercise from './CardioExercise'

export default function DisplayExercise({workout, handleChange, handleSubmit}) {
    return (
        <div>
           {workout.strengthTraining.map((exercise, idx) => (
               <Exercise key={idx} exercise={exercise} handleChange={handleChange} uuid={idx} />
           ))} 
           {workout.cardio.map((cardioWorkout, idx) => (
               <CardioExercise key={idx} cardioWorkout={cardioWorkout} handleChange={handleChange} />
           ))}
        </div>
    )
}



