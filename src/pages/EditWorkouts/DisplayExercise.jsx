import React from 'react'
import Exercise from './Exercise'
import CardioExercise from './CardioExercise'

export default function DisplayExercise({workout, handleChange, handleSubmit}) {
    return (
        <div>
           {workout.strengthTraining.map((exercise) => (
               <Exercise  exercise={exercise} handleChange={handleChange} handleSubmit={handleSubmit}/>
           ))} 
           {workout.cardio.map((cardioWorkout) => (
               <CardioExercise cardioWorkout={cardioWorkout} handleChange={handleChange} handleSubmit={handleSubmit}/>
           ))}
        </div>
    )
}



