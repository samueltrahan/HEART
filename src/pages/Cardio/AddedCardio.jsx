import React from 'react';
import AddCardio from './AddCardio';

const AddedCardio = ({ addedCardio }) =>
  addedCardio.map(({ name, distance }) => (
    <AddCardio name={name} distance={distance} />
  ));

export default AddedCardio;