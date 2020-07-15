import React from 'react';
import { Link } from 'react-router-dom';
import SingleWorkout from '../../pages/Workouts/SingleWorkout'

export default function WorkoutCard({ workout, handleDeleteWorkout }) {
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{workout.name}</span>
              <p>
                {workout.workouts.map(singleWorkout => (
                < SingleWorkout  name={singleWorkout.name} reps={singleWorkout.reps}/>
                ))}
              </p>
            </div>
            <div className="card-action"></div>
          <button type="submit" className="btn red" onClick={() => handleDeleteWorkout(workout._id)}>
                    <i className="material-icons left">delete</i>    
                        Delete Workouts
            </button>
            <Link
                className="btn yellow black-text"
                to={{
                    pathname: '/editWorkout',
                    state: {workout}
                }}
                ><i className="material-icons left">build</i>
                Edit Workout
                </Link>
            </div>
          </div>
        </div>
    </>
  );
}
