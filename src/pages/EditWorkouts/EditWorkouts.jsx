import React, { useState } from 'react';
import DisplayExercise from './DisplayExercise';
import './EditWorkouts.css'

export default function EditWorkouts(props) {
    const filteredWorkouts = props.workouts.filter((individualWorkouts) => {
        return individualWorkouts.id === props.location.state
    })
    const [exercise, setExercise] = useState(filteredWorkouts);

 const formRef = React.createRef();


  function handleSubmit(event) {
      event.preventDefault();
    props.handleUpdateWorkout({setExercise: exercise});
  }

  function handleChange(event, uuid, type) {
      const upDatedWorkout = exercise.map((workout) => {
       const upDatedWorkoutTypes = workout[type].map((workoutType, idx) => {
            if(idx === uuid) {
            return {
                ...workoutType, [event.target.name]: event.target.value
                }
            }
            return workoutType;
        })
        return {
            ...workout, 
           [type]: upDatedWorkoutTypes
        }
      })
    setExercise(
      upDatedWorkout
    );
  }

  return (
    <div>
      {exercise.map(workout => {
        return (
          <div className="row">
              <form className="col s12" ref={formRef} onSubmit={handleSubmit}>
            <div className="input-field col s3">
              <p>
                <label className="add-btn">
                  <span>
                    <h3 className="workout-name">{workout.name}</h3>
                    <DisplayExercise
                      workout={workout}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                   <button type="submit" className="waves-effect waves-light btn"><i class="material-icons left">update</i>Update Workout</button>
                  </span>
                </label>
              </p>
            </div>
        </form>
          </div>
        );
      })}
    </div>
  );
}
