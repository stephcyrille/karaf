import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Cookie from "js-cookie";

import { saveToken, saveUser, isLoggedIn } from "../../../libs/utils/auth_utils";

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
        auth: isLoggedIn()
      }
    }

    componentDidMount(){
      this.checkAuth();
    }

    checkAuth(){
      const location = this.props.location;
      const redirect = location.pathname + location.search;

      if(!this.state.auth){
        this.props.history.push(`/login?redirect=${redirect}`);
      }
    }


    render(){
      return this.state.auth ? <Acomponent { ...this.props } /> : null;
    }
  }
  return withRouter(AuthenticatedComponent)
}