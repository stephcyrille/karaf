import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
// import url from "../../../front_office/routes/url";

import { Button, Form, FormGroup } from "reactstrap";
import { reduxForm, Field, propTypes as reduxFormPropTypes } from "redux-form";

import './style.local.scss'



export default
@connect((state, props) => ({}))
@reduxForm({ form: "loginForm", enableReinitialize: true })
class Login extends React.Component {

  componentWillMount(){
    const title = "Login | Fac'Social"
    document.title = title
  }


  render() {

    return (
      <div className="test">
        <h3>Login</h3>
      </div>
    )
  }


}