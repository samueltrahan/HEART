import React, { useState } from 'react';
import DisplayExercise from './DisplayExercise';

export default function EditWorkouts(props) {
  const [exercise, setExercise] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateWorkout(exercise);
  }

  function handleChange(e) {
    const change = { ...exercise, [e.target.name]: e.target.value };
    console.log(change);
    setExercise({
      change,
    });
  }

  return (
    <div>
      {props.workouts.map(workout => {
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
