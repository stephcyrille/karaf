import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
//import url
import urls from "./urls";

import requireAuth from "../components/Authentication/authComponent"
//import components
import Home from "../../front_office/components/Home/index.js";
import Login from "../components/Authentication/Login/index"
import NotFound from "../components/404/index"


@withRouter
class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path={urls.LOGIN} component={Login} />
        <Route exact path={urls.HOME} component={requireAuth(Home)} />
        <Route exact path={urls.NOTFOUND} component={NotFound} />
        <Redirect to={urls.NOTFOUND} />
      </Switch>
    );
  }
}
export default Routes;
