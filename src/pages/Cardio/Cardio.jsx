import React from 'react';
import CardioWorkouts from './CardioWorkouts';
import { CARDIO } from '../../constants';

export default function Workouts(props) {
  return (
    <div>
      {CARDIO.map(cardio => (
        <CardioWorkouts addCardio={props.addCardio} name={cardio} handleChange={props.handleChange}/>
      ))}
    </div>
  );
}