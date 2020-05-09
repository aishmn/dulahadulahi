import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
} from "./types";
import axios from "../../utils/Axios";
import { setAlert } from "./alertAction";

export const getMyProfile = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    const res = await axios.get("/profiles/me", config);
    dispatch({ type: GET_USER_PROFILE, payload: res.data.data.profile });
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_ERROR,
      payload: error,
    });
  }
};

export const updateMyProfile = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };

    const res = await axios.patch(
      `/profiles/updateMyProfile`,
      formData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data.data.data,
    });
    dispatch(setAlert("Profile Updated"));
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_ERROR,
    });
  }
};
