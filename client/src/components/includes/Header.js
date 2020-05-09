import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import PropTypes from "prop-types";

const Header = ({ auth, logout }) => {
  const guestLinks = (
    <ul className="navbar-nav  mt-2 mt-lg-0 ">
      <li className="nav-item">
        <Link className="nav-link " to="/login">
          <i class="fas fa-sign-in-alt"></i> Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          <i class="fas fa-user-plus"></i> Signup
        </Link>
      </li>
    </ul>
  );
  const authLinks = (
    <ul className="navbar-nav  mt-2 mt-lg-0 ">
      <li className="nav-item">
        <Link className="nav-link " to="/dashboard">
          <i class="fas fa-columns"></i> Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <li className="nav-link" onClick={() => logout()}>
          <i class="fas fa-sign-out-alt"></i> Logout
        </li>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-dark red darken-3">
      <a className="navbar-brand mr-5 " href="/#" style={{ fontSize: "1.5em" }}>
        <i class="fab fa-gratipay fa-lg"></i> DulahaDulahi
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="navbar-nav mr-auto"
          style={{
            fontSize: "20px",
            opacity: "0.9",
          }}
        >
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <i class="fas fa-home"></i> Home{" "}
            </Link>
            <span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i class="fas fa-info-circle"></i> About
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        {auth.isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Header);
