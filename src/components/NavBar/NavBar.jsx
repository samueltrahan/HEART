import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
            <a className=" left" href="/"><img src="" height='66' alt="netflix-font" border="0"/></a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/workouts/add" className="nav-link-b">Add a Workout</a></li>
                    <li><a href="/workouts" className="nav-link-b"><img src="./public/gym.png" alt=""/>Workout List</a></li>
                    <li><a href="/todos/add" className="nav-link-b">Get Done List</a></li>
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