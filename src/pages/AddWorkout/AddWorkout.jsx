import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default class AddWorkout extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      reps: '',
      genre: '',
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
    this.props.handleAddWorkout(this.state.formData);
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="row">
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
                <input
                  name="reps"
                  type="Number"
                  id="reps"
                  className="active"
                  value={this.state.formData.reps}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="reps">Reps</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="genre"
                    value="Upper Body"
                    onChange={this.handleChange}
                    type="radio"
                  />
                  <span>Upper Body</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="genre"
                    value="Lower Body"
                    onChange={this.handleChange}
                    type="radio"
                  />
                  <span>Lower Body</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="genre"
                    value="Abs"
                    onChange={this.handleChange}
                    type="radio"
                  />
                  <span>Abs</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="genre"
                    value="Back"
                    onChange={this.handleChange}
                    type="radio"
                  />
                  <span>Back</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="genre"
                    value="Cardio"
                    onChange={this.handleChange}
                    type="radio"
                  />
                  <span>Cardio</span>
                </label>
              </p>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
