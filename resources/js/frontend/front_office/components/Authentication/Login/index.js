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
      <div className="background">
        <div className="container">
          <div className="row" style={{ paddingTop: "100px" }}>
            <div id="block1" className="col-sm-6">
              <h5>Bienvenu dans</h5>
              <h1 className="main-title">FGI NETWORK</h1>
              <br /><hr />
              <p>Le premier reseau social universitaire de la Faculte de Genie Industriel. Partager vos requetes, sujets et toutes informations dans une seule communauté constituée de personnes qui sont proches de vous
              </p>
              <div className="btn-content">
                <button className="btn btn-light btn-md connect">Se connecter</button>
                <button className="btn btn-outline-light btn-md register">S'inscrire</button>
                {/*<div className="btn-item1">Se connecter</div>
                                <div className="btn-item2">S'inscrire</div>*/}
              </div>
            </div>
            <div className="col-sm-6">
              <div id="block2">
                <h3 className="text-center">Se connecter</h3>
                <div className="iconUser text-center">
                  <i className="far fa-user-circle fa-4x"></i>
                </div>
                {/*<img src="images/account.png" className="profile" alt="user-icon" />*/}
                <form className="" action="index.html" method="post">
                  <label for="">Email ou pseudo</label><br />
                  <input type="text" name="email" value="" className="form-control" /><br /><br />
                  <center><button type="submit" className="btn-submit"  name="suivant">suivant</button></center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


}