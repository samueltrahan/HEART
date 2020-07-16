import React from 'react';
import AddedStrengthTraining from './AddedStrengthTraining';

const AddedStrengthTrainings = ({ AddedStrengthExercise }) =>
  AddedStrengthExercise.map(({ name, reps }) => (
    <AddedStrengthTraining name={name} reps={reps} />
  ));

export default AddedStrengthTrainings;
