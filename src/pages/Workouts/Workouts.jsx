import React from 'react';
import Workout from './Workout';
import { WORKOUTS } from '../../constants';

export default function Workouts(props) {
  return (
    <div>
      {WORKOUTS.map(workout => (
        <Workout addWorkout={props.addWorkout} name={workout} handleChange={props.handleChange}/>
      ))}
    </div>
  );
}
