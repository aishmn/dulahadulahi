import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../includes/Spinner";
import Profile from "./Profile";
import { getMyProfile } from "../../redux/actions/profileActions";
import AdminHeader from "../includes/AdminHeader";

const Dashboard = ({ getMyProfile, profile: { profile, loading } }) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);
  if (loading) return <Spinner />;
  if (profile === null) return <Spinner />;

  return (
    <div className="">
      <AdminHeader profile={profile} />
      <div className="row">
        <div className="col-lg-4 col-md-6 full-height">
          <div className="card-body card-body-cascade">
            <p className="card-text">
              <div className="view view-cascade shadow">
                <img
                  src="https://dresseskhazana.com/wp-content/uploads/2017/11/Red-Suit-with-beautiful-Bridal-Makeup-2017.jpg"
                  className="mx-auto rounded-circle p-5"
                  alt={profile.user.name}
                  style={{ height: "300px", width: "300px" }}
                />
              </div>
              <ul className="list-group p-0 rounded-0">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Name
                  <span className=""> {profile.user.name}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Mobile Number
                  <span className=""> {profile.user.mobile}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Country
                  <span className=""> {profile.country}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Horoscope
                  <span className=""> {profile.horoscope}</span>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 border-left ">
          <div className=" rounded-0">
            <div className="card-body ">
              <h4 className="h4 text-uppercase text-center font-weight-bolder">
                People intrested in you
              </h4>
              <Profile />
              <Profile />
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  getMyProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getMyProfile })(Dashboard);
