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
        <div className="col-lg-4 col-md-6 p-4 mt-4  ">
          <div className="card card-cascade narrower mb-4 shadow">
            <div className="view view-cascade">
              <img
                src="https://dresseskhazana.com/wp-content/uploads/2017/11/Red-Suit-with-beautiful-Bridal-Makeup-2017.jpg"
                className="card-img-top img-thumbnail mx-auto mt-5"
                alt={profile.user.name}
                style={{ height: "300px", width: "310px" }}
              />
              <a href="/#">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            <div className="card-body card-body-cascade">
              <p className="card-text">
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
        </div>
        <div className="col-lg-8 col-md-6 ">
          <div className="card shadow  rounded-0 young-passion-gradient">
            <div className="card-body ">
              <h4 className="h4 text-uppercase text-center text-white font-weight-bolder border-bottom">
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
