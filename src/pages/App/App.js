import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import AddWorkout from '../AddWorkout/AddWorkout';
import * as workoutAPI from '../../services/workout-api'
import * as todoAPI from '../../services/todo-api'
import WorkoutListPage from '../WorkoutList/WorkoutListPage'
import AddTodo from '../AddTodo/AddTodo';
import EditWorkout from '../EditWorkouts/EditWorkouts'

class App extends Component {
  state = {
    user: userService.getUser(),
    workouts: [],
    todos: [],
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
    console.log(newWorkout);
    this.setState(state => ({
      workouts: [...state.workouts, newWorkout]
    }), () => this.props.history.push('/workouts'));
  }

  handleAddTodo = async newTodoData => {
    const newTodo = await todoAPI.create(newTodoData);
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }), () => this.props.history.push('/todos'));
  }

  handleDeleteWorkout = async id => {
    await workoutAPI.deleteWorkout(id);
    this.setState(state => ({
      workouts: state.workouts.filter(w => w._id !== id)
    }), () => this.props.history.push('/workouts'))
  }

  handleUpdateWorkout = async updatedWorkoutData => {
    const updatedWorkout = await workoutAPI.update(updatedWorkoutData)
    const newWorkoutArray = this.state.workouts.map(workout =>
    workout._id === updatedWorkout._id ? updatedWorkout : workout);
    this.setState(
      {workouts: newWorkoutArray},
      () => this.props.history.push('/workouts')
    )  
  }

  async componentDidMount() {
    const workouts = await workoutAPI.getAll();
    this.setState({workouts});
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
        userService.getUser() ?
        <AddWorkout handleAddWorkout={this.handleAddWorkout} />
        :
        <Redirect to='/login' />
        } />

        <Route exact path='/workouts' render={() =>
        <WorkoutListPage 
        workouts={this.state.workouts}
        handleDeleteWorkout={this.handleDeleteWorkout}
        />
        } />
        <Route exact path='/todos/add' render={() =>
          userService.getUser() ?
        <AddTodo handleAddTodo={this.handleAddTodo}
        />
        :
        <Redirect to='/login' />
        }
        />
        <Route exact path='/editWorkout' render={({location}) => 
        <EditWorkout handleUpdateWorkout={this.handleUpdateWorkout} location={location} workouts={this.state.workouts} />
        }  
        />
      </>
    );
  }
}

export default App;
