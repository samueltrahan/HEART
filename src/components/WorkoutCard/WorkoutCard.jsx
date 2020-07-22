import React from 'react';
import { Link } from 'react-router-dom';
import SingleWorkout from '../../pages/Workouts/SingleWorkout';
import SingleCardioWorkout from '../../pages/Cardio/SingleCardioWorkout'
import './WorkoutCard.css'

export default function WorkoutCard({ workout, handleDeleteWorkout, user }) {

  let userWorkout = (user._id === workout.user) ? 
  <>
  <div className="row">
        <div className="col s12 m6">
          <div className="card transparent">
            <div className="card-content white-text">
              <span className="card-title">{workout.name}</span>
              <p>
                {workout.strengthTraining.map(singleWorkout => (
                < SingleWorkout  name={singleWorkout.name} reps={singleWorkout.reps}/>
                ))}
                {workout.cardio.map(cardioWorkout => (
                <SingleCardioWorkout name={cardioWorkout.name} distance={cardioWorkout.distance}/>
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
                    state: workout.id
                }}
                ><i className="material-icons left">build</i>
                Edit Workout
                </Link>
            </div>
          </div>
        </div>
    </>
    :
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card transparent">
            <div className="card-content white-text">
              <span className="card-title">{workout.name}</span>
              <p>
                {workout.strengthTraining.map(singleWorkout => (
                < SingleWorkout  name={singleWorkout.name} reps={singleWorkout.reps}/>
                ))}
                {workout.cardio.map(cardioWorkout => (
                <SingleCardioWorkout name={cardioWorkout.name} distance={cardioWorkout.distance}/>
                ))}
              </p>
            </div>
            {/* <div className="card-action"></div>
          <button type="submit" className="btn red" onClick={() => handleDeleteWorkout(workout._id)}>
                    <i className="material-icons left">delete</i>    
                        Delete Workouts
            </button>
            <Link
                className="btn yellow black-text"
                to={{
                    pathname: '/editWorkout',
                    state: workout.id
                }}
                ><i className="material-icons left">build</i>
                Edit Workout
                </Link>
            </div> */}
          </div>
        </div>
      </div>
  </>
  return (
    <>
      {userWorkout}
    </>
  );
}
