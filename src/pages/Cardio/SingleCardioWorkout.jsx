import React from 'react'
import './CardioWorkouts.css'

const SingleWorkout = ({name, distance}) => {

    return (
        <div className="cardioworkout">
            <strong>{name} </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Distance: <strong>{distance}</strong>
            <br />
        </div>
        
    )
}

export default SingleWorkout