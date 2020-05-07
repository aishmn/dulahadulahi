import { GET_USER_PROFILE_ERROR, GET_USER_PROFILE } from "../actions/types";

const initalState = {
  profile: null,
  loading: true,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return { ...state, loading: false, profile: payload };
    case GET_USER_PROFILE_ERROR:
      return { ...state, loading: false, profile: null };
    default:
      return state;
  }
}
