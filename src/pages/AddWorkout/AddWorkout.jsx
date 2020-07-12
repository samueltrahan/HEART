import React, { Component } from 'react';
import './AddWorkout.css';
import NavBar from '../../components/NavBar/NavBar';
import Workouts from '../Workouts/Workouts'
import Reps from '../Reps/Reps'

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
            <Workouts invalidForm={this.invalidForm} formRef={this.formRef} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <Reps invalidForm={this.invalidForm} formRef={this.formRef} handleChange={this.handleChange}/>
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
