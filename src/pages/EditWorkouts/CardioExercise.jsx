import React from 'react'

export default function CardioExercise({cardioWorkout, uuid, handleChange}) {
    return (
        <>
            <input name="name" id="name" type="text" className="active" value={cardioWorkout.name} onChange={(event) => handleChange(event, uuid, 'cardio')} required/>
            <input name="reps" id="reps" type="text" className="active" value={cardioWorkout.distance} onChange={(event) => handleChange(event, uuid, 'cardio')} required />
        </>
    )
}
