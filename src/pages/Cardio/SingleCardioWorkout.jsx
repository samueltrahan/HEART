import React from 'react'

const SingleWorkout = ({name, distance}) => {

    return (
        <div>
            <strong>{name} </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Distance: <strong>{distance}</strong>
            <br />
        </div>
        
    )
}

export default SingleWorkout