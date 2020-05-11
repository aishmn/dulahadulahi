import Axios from "./Axios";

const setAuthToken = (token) => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
    console.log("token from set auth", token);
  } else {
    delete Axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
