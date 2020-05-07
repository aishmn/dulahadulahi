import React, { useState, useEffect } from "react";
import { signup } from "../../redux/actions/authActions";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { setAlert } from "../../redux/actions/alertAction";
import { connect } from "react-redux";

const Signup = ({ signup, auth }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    passwordConfirm: "",
  });
  const { name, mobile, password, passwordConfirm } = formData;
  useEffect(() => {
    if (auth.isAuthenticated) {
      setAlert("You are already logged in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isAuthenticated]);
  if (auth.isAuthenticated) {
    setAlert("You are already logged in");
    return <Redirect to="/" />;
  }
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await signup(name, mobile, password, passwordConfirm);
    setFormData({ ...formData, mobile: "" });
  };

  return (
    <div className="container-fluid young-passion-gradient">
      <div className="row justify-content-center ">
        <div
          className="col-12 col-md-7 d-sm-none d-md-block full-height shadow"
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
        <div className="col-12 col-md-5 full-height ">
          <form className="shadow py-5 px-2 " onSubmit={(e) => onSubmit(e)}>
            <h5 className="lead heading font-weight-bold">Register now!</h5>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your full name."
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                Please use your real name, we are on a matrimony site.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mobile number</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your mobile no."
                name="mobile"
                value={mobile}
                onChange={(e) => onChange(e)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
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
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input text-muted"
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-muted"
                htmlFor="exampleCheck1"
              >
                Terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-unique btn-block waves-effect waves-light"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { signup, setAlert })(Signup);
