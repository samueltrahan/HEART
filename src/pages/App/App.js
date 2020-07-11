import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import AddWorkout from '../AddWorkout/AddWorkout';
import * as workoutAPI from '../../services/workout-api'

class App extends Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddWorkout = async newWorkoutData => {
    const newWorkout = await workoutAPI.create(newWorkoutData);
    this.setState(state => ({
      workouts: [...state.workouts, newWorkout]
    }), () => this.props.history.push('/workouts'));
  }

  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/workouts/add' render={() =>
        <AddWorkout handleAddWorkout={this.handleAddWorkout} />
        } />
      </>
    );
  }
}

export default App;
