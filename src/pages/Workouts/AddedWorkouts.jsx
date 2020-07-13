import React from 'react';
import AddedWorkout from './AddedWorkout';

const AddedWorkouts = ({ addedWorkouts }) =>
  addedWorkouts.map(({ name, reps }) => (
    <AddedWorkout name={name} reps={reps} />
  ));

export default AddedWorkouts;
