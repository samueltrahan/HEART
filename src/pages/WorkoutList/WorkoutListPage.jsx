import React from 'react'
import './WorkoutList.css'
import NavBar from '../../components/NavBar/NavBar'
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard'




export default function WorkoutList(props) {
   
    return (
        <>
        <NavBar />
        <div>
        {props.workouts.map(workout =>
            <WorkoutCard 
            key={workout._id}
            workout={workout}
            />    
        )}
        </div>
            
        </>
    )
}
