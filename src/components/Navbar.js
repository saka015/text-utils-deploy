import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <div>
    
    <nav className={`navbar navbar-${props.mode}  navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active  " aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.myText}</a>
        </li>        */}
      </ul>

    <div className="colorPicker mx-5 ">
    <button onClick={props.makeGreen} className='btn btn-success mx-2 p-3'>  </button>
    <button onClick={props.makeBlue} className='btn btn-primary mx-2 p-3'></button>
    <button onClick={props.makeRed} className='btn btn-danger mx-2 p-3'></button>
    </div>

      <div className="form-check form-switch text-light">
   <input className="form-check-input cursor-pointer" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
   <label style={{color:'black'}} className="form-check-label" id='switchText' htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>


      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    
    </div>
  )
}

//! Proptypes
Navbar.propTypes ={
      title : PropTypes.string.isRequired,
      myText : PropTypes.string.isRequired
} 

//* Default Proptypes : if we don't pass any value then it will automaticaly comes up there
Navbar.defaultProps ={
    title:'Set Title here',
    myText : 'About Text here'
}