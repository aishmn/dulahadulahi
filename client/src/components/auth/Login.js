import React, { useState, useEffect } from "react";
import { setAlert } from "../../redux/actions/alertAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/authActions";
import { Redirect, withRouter } from "react-router";
const Login = ({ setAlert, login, auth, history }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  const { mobile, password } = formData;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isAuthenticated]);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(mobile, password, history);
  };
  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="container-fluid young-passion-gradient">
      <div className="row ">
        <div
          className="col-12 col-md-7 d-sm-none d-md-block full-height shadow "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
            backgroundPosition: "center",
            backgroundBlendMode: "hard-light",
            backgroundSize: "cover",
            backgroundOrigin: "inherit",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="col-12 col-md-5 ">
          <form
            className="shadow full-height py-5 px-2"
            onSubmit={(e) => onSubmit(e)}
          >
            <h5 className="lead font-weight-bold">Login now!</h5>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mobile number</label>
              <input
                type="text"
                className="form-control"
                id="input-char-counter"
                length="10"
                aria-describedby="emailHelp"
                placeholder="Enter your mobile no."
                name="mobile"
                value={mobile}
                onChange={(e) => onChange(e)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your mobile with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-unique btn-block waves-effect waves-light mt-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, login })(withRouter(Login));
