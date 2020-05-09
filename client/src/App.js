import React, { Fragment, useEffect } from "react";
import Header from "./components/includes/Header";
import { Switch, Route } from "react-router-dom";
import Alert from "./components/includes/Alert";
import { loadUser } from "./redux/actions/authActions";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import Footer from "./components/includes/Footer";
import Routes from "./components/routes/Routes";
import Landing from "./components/home/Landing";
import PropTypes from "prop-types";
import { connect } from "react-redux";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App({ auth: { loading, user } }) {
  useEffect(() => {
    setAuthToken(localStorage.token);
    if (!user) store.dispatch(loadUser());
  }, [user]);

  return (
    <Fragment>
      <Alert />
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routes} />
      </Switch>
      <Footer />
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
App.propsTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {})(App);
