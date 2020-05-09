import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-bolder display-5 text-uppercase">
              Opps that was an incorrect route!
            </h1>
            <p className="text-muted">
              Do you want to go to these pages instead?
            </p>
            <ul className="nav md-tabs nav-justified red lighten-2 mx-0 mb-0 mt-1">
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NotFound;
