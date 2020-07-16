import React, { useState } from 'react';

const Workout = ({ addStrengthExercise, name }) => {
  const [reps, setReps] = useState(0);

  return (
    <div className="row">
      <div className="input-field col s6">
        <p>
          <label className="add-btn">
            <span>
              <h6>{name}</h6>
              <input
                onChange={event => setReps(event.target.value)}
                value={reps}
              />
              <button
                type="button"
                onClick={() => addStrengthExercise({ name, reps })}
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

export default Workout;
