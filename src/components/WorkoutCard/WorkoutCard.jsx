import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkoutCard({ workout }) {
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{workout.name}</span>
              <p>
                Reps: {workout.workouts.reps}
                <br />
              </p>
            </div>
            <div class="card-action"></div>
          </div>
        </div>
      </div>
    </>
  );
}
