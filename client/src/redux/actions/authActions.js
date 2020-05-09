import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
} from "../actions/types";
import { setAlert } from "./alertAction";
import axios from "../../utils/Axios";

export const loadUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    const res = await axios.get("/users/me", config);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({ type: AUTH_ERROR });
  }
};

export const signup = (name, mobile, password, passwordConfirm) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, mobile, password, passwordConfirm });
  try {
    const res = await axios.post("/users/signup", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log("message", err.response);
    if (err.response.data.error.code === 11000) {
      return dispatch(
        setAlert("User already Exists, try another mobile number")
      );
    } else {
      const errors = err.response.data.error.errors;
      Object.values(errors).forEach((value) =>
        dispatch(setAlert(value.message))
      );
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data,
      });
    }
  }
};

export const login = (mobile, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ mobile, password });
  try {
    const res = await axios.post("/users/login", body, config);
    console.log("location", window.location);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    localStorage.setItem("token", res.data.token);
  } catch (err) {
    if (err.response === undefined) {
      return dispatch(setAlert("Server Disconnected, Please try again!"));
    }

    if (err.response.data.message) {
      dispatch(setAlert(err.response.data.message));
    }
    if (err.response.data.errors) {
      err.response.data.errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
  dispatch(setAlert("Succesfully logged out!"));
};
