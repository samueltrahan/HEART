import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkoutCard({ workout, handleDeleteWorkout }) {
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{workout.name}</span>
              <p>
                Workout: {workout.workouts[0].name}
                <br/>
                Reps: {workout.workouts[0].reps}
                <br />
              </p>
            </div>
            <div className="card-action"></div>
          <button type="submit" className="btn red" onClick={() => handleDeleteWorkout(workout._id)}>
                    <i className="material-icons left">delete</i>    
                        Delete Workouts
                    </button>
          </div>
        </div>
      </div>
    </>
  );
}
