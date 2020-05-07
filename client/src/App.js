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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  });

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

export default App;
