import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className="navbar">
      <h3>CrushCode</h3>

      <div className="nav-btn">
        <div>Home</div>
        <div>Docs</div>
        <div>Courses</div>
        <div>Problems</div>

        <button className="btn btn-sm btn-login">Login</button>
        <button className="btn btn-sm btn-sign">Sign up</button>
      </div>
    </div>
  )
}

export default NavBar
