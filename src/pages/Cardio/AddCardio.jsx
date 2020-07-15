import React from 'react';

const AddCardio = ({ name, distance, handleChange }) => (
  <>
    <div onChange={handleChange}>Name: {name}</div>
    <div onChange={handleChange}>Distance: {distance}</div>
  </>
);

export default AddCardio;