import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../includes/Spinner";
import {
  getMyProfile,
  updateMyProfile,
} from "../../redux/actions/profileActions";
import AdminHeader from "../includes/AdminHeader";
import { withRouter } from "react-router";

const initialState = {
  name: "",
  height: "",
  weight: "",
  dob: "",
  religion: "",
  horoscope: "",
  bio: "",
  impressum: "",
  maritial_status: "", //'married', 'unmarried', 'divorced'
  dp_description: "",
  dp_height: "",
  dp_weight: "",
  dp_maritial_status: "",
  dp_religion: "",
  dp_horoscope: "",
  highest_education: "",
  university: "",
  position: "",
  company: "",
  averageSalary: "",
};
const EditProfile = ({
  getMyProfile,
  updateMyProfile,
  profile: { profile, loading },
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getMyProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      setFormData(profileData);
    }
  }, [getMyProfile, loading, profile]);
  const {
    name,
    height,
    weight,
    dob,
    religion,
    horoscope,
    bio,
    impressum,
    maritial_status,
    dp_description,
    dp_religion,
    dp_height,
    dp_weight,
    dp_maritial_status,
    dp_horoscope,
    position,
    company,
    averageSalary,
    highest_education,
    university,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateMyProfile(formData, history);
  };

  if (loading) return <Spinner />;

  if (profile === null) return <Spinner />;

  return (
    <Fragment>
      <AdminHeader profile={profile} />
      <form className="form px-1" onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-lg-4 col-md-6 px-4 pt-3  ">
            <div className="heading lead h5 font-weight-bold px-1 pt-1 border-bottom border-success">
              Basic Information
            </div>

            <div className="form-group mt-2">
              <label htmlFor="exampleFormControlInput1">Full Name</label>
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Your full name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Date of birth</label>
              <input
                type="date"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Your date of birth"
                name="dob"
                value={dob}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Religion</label>
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Your religion"
                name="religion"
                value={religion}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="exampleFormControlSelect11">
                Maritial Status
              </label>
              <select
                className="form-control"
                id="exampleFormControlSelect11"
                name="maritial_status"
                value={maritial_status}
                onChange={(e) => onChange(e)}
              >
                <option>unmarried</option>
                <option>married</option>
                <option>divorced</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Weight</label>
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Your Weight"
                name="weight"
                value={weight}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Height</label>
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Your Height"
                name="height"
                value={height}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Horoscope</label>
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Your Horoscope"
                name="horoscope"
                value={horoscope}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Impressum</label>
              <textarea
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="A line that makes you diffrent."
                name="impressum"
                value={impressum}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Bio</label>
              <textarea
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Enter your bio here"
                name="bio"
                value={bio}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 p-1 border-left border-warning px-4 py-2">
            <div className="heading lead h5 my-2 font-weight-bold border-bottom border-success">
              Desired Partner
            </div>
            <div className="form-row pt-2">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Height</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Height"
                  name="dp_height"
                  value={dp_height}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="desiredpartnerweight">Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="desiredpartnerweight"
                  placeholder="Weight"
                  name="dp_weight"
                  value={dp_weight}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Description</label>
              <textarea
                type="textarea"
                className="form-control"
                id="inputAddress"
                placeholder="Description"
                name="dp_description"
                value={dp_description}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Religion</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Desired Partner Religion"
                name="dp_religion"
                value={dp_religion}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Horoscope</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Desired Partner Horoscope"
                  name="dp_horoscope"
                  value={dp_horoscope}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleFormControlSelects1">
                  Maritial Status
                </label>
                <select
                  className="form-control"
                  id="exampleFormControlSelects1"
                  name="maritial_status"
                  value={dp_maritial_status}
                  onChange={(e) => onChange(e)}
                >
                  <option>unmarried</option>
                  <option>married</option>
                  <option>divorced</option>
                </select>
              </div>
            </div>
            <div className="heading lead h5 font-weight-bold border-bottom border-success ">
              Education
            </div>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Highest Education</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Your Highest Education"
                  name="highest_education"
                  value={highest_education}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">University</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="University"
                  name="university"
                  value={university}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div className="heading lead h5 font-weight-bold border-bottom border-success ">
              Work
            </div>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Position</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Your working position?"
                  name="position"
                  value={position}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="You working at?"
                  name="company"
                  value={company}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputCity">Average Salary</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="Your average salary?"
                  name="averageSalary"
                  value={averageSalary}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <button type="submit" className="form-control btn-unique">
              Update
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
EditProfile.propTypes = {
  getMyProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  updateMyProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getMyProfile, updateMyProfile })(
  withRouter(EditProfile)
);
