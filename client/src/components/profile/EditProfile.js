import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../includes/Spinner";
import { getMyProfile } from "../../redux/actions/profileActions";
import AdminHeader from "../includes/AdminHeader";

const EditProfile = ({ getMyProfile, profile: { profile, loading } }) => {
  const [formData, setFormData] = useState({});
  const onChange = (e) => {};
  const onSubmit = (e) => {};

  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);
  if (loading) return <Spinner />;
  if (profile === null) return <Spinner />;

  return (
    <div className="">
      <AdminHeader profile={profile} />
      <div className="row">
        <div className="col-lg-4 col-md-6 "></div>
        <div className="col-lg-8 col-md-6 p-2 ">
          <form className="p-4 mx-auto">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="New York City"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="11206-1117"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-md">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
EditProfile.propTypes = {
  getMyProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getMyProfile })(EditProfile);
