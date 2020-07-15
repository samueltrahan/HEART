import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

export default class EditWorkouts extends Component {
    state ={
        invalidForm: false,
        formData: this.props.location.state.workout
    }

    formRef = React.createRef();
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateWorkout(this.state.formData);
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }


    render() {
        return (
            <>
                <NavBar />
                <div>
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="name" id="workout_name" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label className="active" htmlFor="movie_name">Workout Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                           
                            <label className="active" htmlFor="cast">Workouts</label>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
