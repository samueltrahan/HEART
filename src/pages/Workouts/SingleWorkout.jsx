import React from 'react'
import './AddWorkout.css'

const SingleWorkout = ({name, reps}) => {

    return (
        <>
          
        <div className="workoutcard">
            <strong>{name} </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Reps:<strong>{reps}</strong>
            <br />
        </div>
       </> 
    )
}

export default SingleWorkout