import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR } from "./types";
import axios from "../../utils/Axios";

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
