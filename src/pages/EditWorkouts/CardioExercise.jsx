import React from 'react'

export default function CardioExercise({cardioWorkout, handleChange}) {
    return (
        <>
            <input name="name" id="name" type="text" className="active" value={cardioWorkout.name} onChange={handleChange} required/>
            <input name="reps" id="reps" type="text" className="active" value={cardioWorkout.distance} onChange={handleChange} required />
        </>
    )
}
