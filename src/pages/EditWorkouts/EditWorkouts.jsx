import React, { useState } from 'react';
import DisplayExercise from './DisplayExercise';

export default function EditWorkouts(props) {
    const filteredWorkouts = props.workouts.filter((individualWorkouts) => {
        return individualWorkouts.id === props.location.state
    })
    const [exercise, setExercise] = useState(filteredWorkouts);




  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateWorkout(exercise);
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
              <form className="col s12" onSubmit={handleSubmit}>
            <div className="input-field col s3">
              <p>
                <label className="add-btn">
                  <span>
                    <h3>{workout.name}</h3>
                    <DisplayExercise
                      workout={workout}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                    <button type="button" onClick={() => {}}>
                      Update Workout
                    </button>
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
