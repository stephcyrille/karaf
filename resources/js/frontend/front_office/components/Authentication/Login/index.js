import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
// import url from "../../../front_office/routes/url";

import { Button, Form, FormGroup } from "reactstrap";
import { reduxForm, Field, propTypes as reduxFormPropTypes } from "redux-form";

import { Steps} from 'antd';
const { Step } = Steps;


import './style.local.scss'



export default
@connect((state, props) => ({}))
@reduxForm({ form: "loginForm", enableReinitialize: true })
class Login extends React.Component {

  state = {
    current: 0,
  };


  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };


  componentWillMount(){
    const title = "Login | Fac'Social"
    document.title = title
  }


  render() {
    const { current } = this.state;

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

                  <Steps current={current} onChange={this.onChange} style={{ paddingTop: "20px" }}>
                    <Step title="Pseudo" description="" />
                    <Step title="Mot de passe" description="" disabled={true} />
                  </Steps>

                  <form className="">
                    <div className="iconUser text-center">
                      <i className="far fa-user-circle fa-4x"></i>
                    </div>
                    <label htmlFor="email">Email ou pseudo</label><br />
                    <input type="email" name="email" className="form-control" autofocus required /><br /><br />
                    <center>
                      <button type="submit" className="btn-submit"  name="suivant">suivant</button>
                    </center>
                  </form>

                  {/*
                    </form>
                      <div className="iconUser text-center">
                        <i className="far fa-user-circle fa-4x"></i>
                      </div>
                      <label htmlFor="password">Mot de passe</label><br />
                      <input type="password" name="password" className="form-control" required /><br /><br />
                      <center>
                        <button type="submit" className="btn-submit"  name="suivant">suivant</button>
                      </center>
                    </form>
                  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


}