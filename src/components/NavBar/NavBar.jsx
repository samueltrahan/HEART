import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
            <a className=" left" href="/"><img src="/heart.png" height='80' alt="netflix-font"/></a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/workouts/add" className="nav-link-b"><i className="material-icons left large">directions_run</i>Add Workout</a></li>
                    <li><a href="/workouts" className="nav-link-b"><i className="material-icons left small">forum</i>Workout List</a></li>
                    <li><a href="/todos/add" className="nav-link-b"><i className="material-icons left small">format_list_numbered</i>Get Done</a></li>
                    <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
                    <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </>
    :
    <>
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li><a href="/login" className="nav-link">Log In</a></li>
                    <li><a href="/signup" className="nav-link">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>

    return (
    <>
        {nav}
    </>
    )
}

export default NavBar;