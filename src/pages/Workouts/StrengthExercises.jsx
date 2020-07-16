import React from 'react';
import StrengthTraining from './StrengthTraining';
import { WORKOUTS } from '../../constants';

export default function StrengthExercises(props) {
  return (
    <div>
      {WORKOUTS.map(workout => (
        <StrengthTraining addStrengthExercise={props.addStrengthExercise} name={workout} handleChange={props.handleChange}/>
      ))}
    </div>
  );
}
