import React from 'react'

export default function Exercise({exercise, uuid, handleChange}) {
    return (
        <>
            Name:<input name="name" id="name" type="text" className="active" value={exercise.name} onChange={(event) => handleChange(event, uuid, 'strengthTraining')} required/>
            Reps:<input name="reps" id="reps" type="text" className="active" value={exercise.reps} onChange={(event) => handleChange(event, uuid, 'strengthTraining')} required />
        </>
    )
}
