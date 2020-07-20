import React from 'react'

export default function CardioExercise({cardioWorkout, uuid, handleChange}) {
    return (
        <>
            Name:<input name="name" id="name" type="text" className="active" value={cardioWorkout.name} onChange={(event) => handleChange(event, uuid, 'cardio')} required/>
            Distance: <input name="reps" id="reps" type="text" className="active" value={cardioWorkout.distance} onChange={(event) => handleChange(event, uuid, 'cardio')} required />
        </>
    )
}
