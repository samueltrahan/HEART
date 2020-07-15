import React from 'react'

const SingleWorkout = ({name, reps}) => {

    return (
        <div>
            <strong>{name} </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Reps:<strong>{reps}</strong>
            <br />
        </div>
        
    )
}

export default SingleWorkout