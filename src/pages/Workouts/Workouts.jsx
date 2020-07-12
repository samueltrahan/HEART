import React, {useState, useEffect} from 'react'


export default function Workouts(props) {
    const [workouts, setWorkouts] = useState([]);
  
    
useEffect(() => {
    
})
    function handleWorkoutSubmit(e) {
        setWorkouts((prevWorkouts) => {
            return [...prevWorkouts, {id: workouts._id, workout: workouts}]
        })
    }

    return (
        <form
          className="col s12"
          ref={props.formRef}
          onSubmit={props.handleSubmit}
        >
        <div>
        
          <div className="row">
            <div className="input-field col s6">
              <p>
                <label className="add-btn">
                  <span>
                    <h5>Bench Press</h5>
                    <button
                      onClick={handleWorkoutSubmit}
                      className="btn-floating btn-small waves-effect waves-light red"
                    >
                      <i className="material-icons">add</i>
                    </button>
                  </span>
                </label>
              </p>
            </div>
          </div>
        </div>
        </form>
    )
}
