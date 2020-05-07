import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = ({ profile }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light font-weight-bold red lighten-4 p-0 px-3">
      <a className="navbar-brand text-uppercase" href="/#">
        About {profile.user.name}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">
              <i class="fas fa-home shadow "></i>Dashboard
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/edit-profile">
              <i class="far fa-edit"></i> Edit Profile
              <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <span className="navbar-text ">
          <i class="fas fa-user-tie shadow "></i> {profile.user.name}
        </span>
      </div>
    </nav>
  );
};

export default AdminHeader;
