import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as Cookie from "js-cookie";


export default
function requireAuth(Acomponent) {

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

    render(){
      return Cookie.get('auth') ? <Acomponent { ...this.props } /> : null;
    }
  }
  return withRouter(AuthenticatedComponent)
}