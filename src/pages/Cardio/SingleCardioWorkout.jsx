import React from 'react'
import './CardioWorkouts.css'

const SingleWorkout = ({name, distance}) => {

    return (
        <div className="cardioworkout">
           <div className="cardio-name"><strong>{name} </strong></div>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <div className="cardio-distance">Distance: <strong>{distance}</strong></div> 
            <br />
        </div>
        
    )
}

export default SingleWorkout