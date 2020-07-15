import React, { useState } from 'react';

const CardioWorkouts = ({ addCardio, name }) => {
  const [distance, setDistance] = useState('');

  return (
    <div className="row">
      <div className="input-field col s6">
        <p>
          <label className="add-btn">
            <span>
              <h6>{name}</h6>
              <input
                type="text"
                onChange={event => setDistance(event.target.value)}
                value={distance}
              />
              <button
                type="button"
                onClick={() => addCardio({ name, distance })}
                className="btn-floating btn-small waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </button>
            </span>
          </label>
        </p>
      </div>
    </div>
  );
};

export default CardioWorkouts;