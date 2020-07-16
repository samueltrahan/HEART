import React from 'react';

const AddedStrengthTraining = ({ name, reps, handleChange }) => (
  <>
    <div onChange={handleChange}>Name: {name}</div>
    <div onChange={handleChange}>Reps: {reps}</div>
  </>
);

export default AddedStrengthTraining;
