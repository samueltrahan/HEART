import React from 'react'

export default function Exercise({exercise, handleChange, handleSubmit}) {
    return (
        <>
            <input name="name" id="name" type="text" className="active" value={exercise.name} onChange={handleChange} required/>
            <input name="reps" id="reps" type="text" className="active" value={exercise.reps} onChange={handleChange} required />
            
        </>
    )
}
