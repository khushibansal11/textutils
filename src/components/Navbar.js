import React from 'react'
import PropTypes from 'prop-types'

import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.homeText}</Link>
        </li>
        // <li className="nav-item">
        //   <Link className="nav-link" to="/about">{props.aboutText}</Link>
        // </li>
      </ul>
      <div className="form-check form-switch w-0">
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.mode=='light'?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Change mode</label>
</div>
      
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
}

Navbar.defaultProps={
  title: 'TextUtils',
  homeText: 'Home',
  aboutText: 'About',

}
