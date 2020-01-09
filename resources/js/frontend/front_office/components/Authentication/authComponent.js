import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Cookie from "js-cookie";

import { saveToken, saveUser } from "../../../libs/utils/auth_utils";

import { authGuardCStoreActions } from "./store";



export default
function requireAuth(Acomponent) {
  @connect((state, props) => ({
    authGuardCStore: state.authGuardCStore
  }))
  class AuthenticatedComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        auth: Cookie.get('auth')
      }
    }

    componentDidMount(){
      this.checkAuth();
    }

    checkAuth(){
      const location = this.props.location;
      const redirect = location.pathname + location.search;

      if(!Cookie.get('auth')){
        this.props.history.push(`/login?redirect=${redirect}`);
      }
    }


    _checkAuthentication = () => {
      window.axios
        .get("/rest-auth/user/")
        .then(response => {
          // Save loggedIn user on localStorage
          saveUser(JSON.stringify(response.data));
          saveToken(response.data.key);
          this.props.dispatch(authGuardCStoreActions.setAuthChecked());
          this.props.dispatch(authGuardCStoreActions.setIsAuthenticate());
          window.location.href = "/";
        })
        .catch(error => {
          console.log("No user loggedIn", error);
          this.props.dispatch(
            authGuardCStoreActions.setAuthChecked()
          );
        });
    };




    render(){
      return Cookie.get('auth') ? <Acomponent { ...this.props } /> : null;
    }
  }
  return withRouter(AuthenticatedComponent)
}