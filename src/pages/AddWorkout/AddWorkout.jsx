import React, { Component } from 'react';
import './AddWorkout.css';
import NavBar from '../../components/NavBar/NavBar';

export default class AddWorkout extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      workouts: [],
      reps: '',
      genre: '',
    },
  };

  formRef = React.createRef();

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };

    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddWorkout(this.state.formData);
  };

  handleWorkoutSubmit = () => {
    const workout = this.state.formData;
    this.setState(() => {
      return [...workout.workouts, { id: workout._id, workouts: workout }];
    });
  };

  render() {
    return (
      <>
        <NavBar />
        <form
          className="col s12"
          ref={this.formRef}
          onSubmit={this.handleSubmit}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                name="name"
                id="workout_name"
                type="text"
                className="active"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="workout_name">Workout Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <p>
                <label className="add-btn">
                  <span>
                    <h5>Bench Press</h5>
                    <button
                      onClick={this.handleWorkoutSubmit}
                      className="btn-floating btn-small waves-effect waves-light red"
                    >
                      <i className="material-icons">add</i>
                    </button>
                  </span>
                </label>
              </p>
            </div>
          </div>

          <button
            type="submit"
            className=" btn red"
            disabled={this.state.invalidForm}
          >
            <i className="material-icons left">add</i>
            Add Workout
          </button>
        </form>
      </>
    );
  }
}
