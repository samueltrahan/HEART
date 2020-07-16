import React, { Component } from 'react';
import './AddWorkout.css';
import NavBar from '../../components/NavBar/NavBar';
import StrengthExercises from '../Workouts/StrengthExercises';
import AddedStrengthTrainings from '../Workouts/AddStrengthTrainings';
import Cardio from '../Cardio/Cardio';
import AddedCardio from '../Cardio/AddedCardio'
import {v4 as uuid} from 'uuid';

class AddWorkout extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      strengthTraining: [],
      cardio: [],
    },
  };

  formRef = React.createRef();

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
     invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddWorkout({...this.state.formData, id: uuid()});
  };

  addStrengthExercise = (newExercise) => {
    this.setState({
      formData: {
        ...this.state.formData,
        strengthTraining: [...this.state.formData.strengthTraining, {...newExercise, id: uuid()}],
      },
    });
  };

  addCardio = (newCardio) => {
    this.setState({
      formData: {
        ...this.state.formData,
        cardio: [...this.state.formData.cardio, {...newCardio,id: uuid()}],
      }
    })
  }

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
            <h6>Workouts</h6>
          <AddedStrengthTrainings AddedStrengthExercise={this.state.formData.strengthTraining} handleChange={this.handleChange}/>
          <h6>Cardio</h6>
          <AddedCardio addedCardio={this.state.formData.cardio} handleChange={this.handleChange}/>
          <h3>Workouts</h3>
          <StrengthExercises
            addStrengthExercise={this.addStrengthExercise}
            handleChange={this.handleChange}
          />
          <h3>Cardio</h3>
          <Cardio addCardio={this.addCardio}/>
          <button
            type="submit"
            className=" btn red"
            disabled={this.state.invalidForm}
          >
            <i className="material-icons left">add</i>
            Finish Workout
          </button>
          </div>
          </div>
        </form>
      </>
    );
  }
}

export default AddWorkout
