import { combineReducers } from "redux";
import auth from "../reducers/authReducers";
import alert from "../reducers/alertReducer";
import profile from "../reducers/profileReducers";

export default combineReducers({ auth, alert, profile });
