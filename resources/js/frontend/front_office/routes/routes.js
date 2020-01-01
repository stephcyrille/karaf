import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
//import url
import urls from "./urls";
//import components
import Home from "../../front_office/components/Home/index.js";



@withRouter
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path={urls.Home} component={Home} />
       
      </Switch>
    );
  }
}
export default Routes;
