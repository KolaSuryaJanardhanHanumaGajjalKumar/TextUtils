import React from "react";
import { Link } from "react-router-dom";

// import ColorPal from "./ColorPal";

// import PropTypes from "prop-types";

function Navbar(props) {
    let oppMode;
    if(props.mode==='light') oppMode='dark';
    else oppMode='light';

    
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
          
          {/* <ColorPal collMode={collMode} /> */}
          {/* <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" style={{backgroundColor: "#023047"}} onClick={props.colMode("#023047")} className="btn ">
        1
      </button>
      <button type="button" style={{backgroundColor: "#264653"}} onClick={props.colMode("#264653")} className="btn ">
        2
      </button>
      <button type="button" style={{backgroundColor: "#2A9D8F"}} onClick={props.colMode("#2A9D8F")} className="btn ">
        3
      </button>
      <button type="button" style={{backgroundColor: "#E9C46A"}} onClick={props.colMode("#E9C46A")} className="btn ">
        1
      </button>
      <button type="button" style={{backgroundColor:"#F4A261"}} onClick={props.colMode("#F4A261")} className="btn ">
        2
      </button>
      <button type="button" style={{backgroundColor:"#E76F51"}} onClick={props.colMode("#E76F51")} className="btn ">
        3
      </button>
    </div> */}
          <div className={`form-check form-switch text-${oppMode}`} >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
