import React from 'react';

const AddCardio = ({ name, distance, handleChange }) => (
  <>
    <div className="cardio-name" onChange={handleChange}>Name: {name}</div>
    <div className="cardio-distance"onChange={handleChange}>Distance: {distance}</div>
  </>
);

export default AddCardio;