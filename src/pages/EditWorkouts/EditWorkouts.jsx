import React from 'react'

export default function EditWorkouts(props) {
console.log(props)

    return  (
        <div>
            Hello world
            {props.workouts.map(workout => {
                return (
                  <div className="row">
                  <div className="input-field col s6">
                    <p>
                      <label className="add-btn">
                        <span>
                          <h6>{workout.stregnthTraining.name}</h6>
                          <input
                        
                            value={workout}
                          />
                          <button
                            type="button"
                            onClick={() => {}}
                            className="btn-floating btn-small waves-effect waves-light red"
                          >
                            <i className="material-icons">add</i>Update Workout
                          </button>
                        </span>
                      </label>
                    </p>
                  </div>
                </div>
                )
            })}
        </div>
    )
}



