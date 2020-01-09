import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
// import url from "../../../front_office/routes/url";
import renderHTML from 'react-render-html';
import { Form, FormGroup } from "reactstrap";
import { reduxForm, Field, propTypes as reduxFormPropTypes } from "redux-form";

import { Steps, Button, message } from 'antd';



import './style.local.scss'

const { Step } = Steps;


const steps = [
  {
    title: 'Pseudo',
    content: `
            <div className="iconUser text-center">
              <i className="far fa-user-circle fa-5x"></i>
            </div>
            <label htmlFor="email">Email ou pseudo</label><br />
            <input type="email" name="email" className="form-control" autofocus required /><br /><br />
            `
    ,
  },
  {
    title: 'Mot de passe',
    content: `
            <div className="iconUser text-center">
              <i className="far fa-user-circle fa-5x"></i>
            </div>
            <label htmlFor="password">Mot de passe</label><br />
            <input type="password" name="password" className="form-control" required /><br /><br />`
    ,
  },  
];




export default
@connect((state, props) => ({}))
@reduxForm({ form: "loginForm", enableReinitialize: true })
class Login extends React.Component {
  componentWillMount(){
    const title = "Login | Fac'Social"
    document.title = title
  }

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }


  next() {
    const current = this.state.current + 1;
    alert("changemen de page imminante...")

    // Fetch user by username there and catch picture
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
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

                <Steps current={current}>
                  {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>

                <div className="steps-content">{renderHTML(steps[current].content)}</div>

                <div className="steps-action">
                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                      Suivant
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                      Soumettre
                    </Button>
                  )}
                  {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                      Précédant
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


}