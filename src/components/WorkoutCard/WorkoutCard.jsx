import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkoutCard({ workout }) {
  return (
    <>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{workout.name}</span>
              <p>
                Reps: {workout.reps}
                <br />
                Workout Type: {workout.genre}
              </p>
            </div>
            <div class="card-action"></div>
          </div>
        </div>
      </div>
    </>
  );
}
