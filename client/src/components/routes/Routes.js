import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Dashboard from "../profile/Dashboard";
import NotFound from "../includes/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import EditProfile from "../profile/EditProfile";
const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoutes exact path="/dashboard" component={Dashboard} />
        <PrivateRoutes
          exact
          path="/dashboard/edit-profile"
          component={EditProfile}
        />

        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
