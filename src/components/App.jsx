import React from 'react'
import NavBar from './NavBar';
import SideBar from "./SideBar"
import Blogs from './Blogs';
import Language from './Language';
import "./App.css"
function App() {
  return (
    <div>
    <div className='header'>
    <NavBar/>
    <Language/>
    </div>

    <div className='main'>
    <SideBar/>
    <Blogs/>
    </div>
    <div className='footer'>

    </div>
    </div>
  )
}

export default App;