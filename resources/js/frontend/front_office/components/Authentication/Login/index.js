import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup } from "reactstrap";
import { reduxForm, Field, propTypes as reduxFormPropTypes } from "redux-form";
import { Steps, Button, Spin, Icon, Checkbox } from 'antd';

import { loginCStoreActions } from './store';
import './style.local.scss';

import { saveToken, saveUser } from '../../../../libs/utils/auth_utils';




const antIcon = <Icon type="loading" style={{ fontSize: 18, color: "green" }} spin />

//  Validation statement
const required = value => (value || typeof value === 'number' ? undefined : 'Ce champ est requis');
export const minLength = min => value =>
  value && value.length < min ? `Minimun ${min} caractères requis ou plus` : undefined
export const minLength2 = minLength(2)
export const minLength6 = minLength(6)
const email = value => 
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email invalide' : undefined
export const passwordMatch = (value, allValues) => 
  value !== allValues.register_password ? 'Les deux mot de passe doivent être identique' : undefined;


const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className="form-control"
    />
    {touched && (
      (error && 
        <span
          style={{
            paddingLeft: "0",
            paddingRight: "1em",
            color: "red",
            fontSize: "0.8em",
            fontStyle: "italic",
            display: "block",
            paddingTop: "8px"
          }}
        >
          { error }
        </span>
      )
    )}
    
  </div>
);



export default
@connect((state, props) => ({
  loginCStore: state.loginCStore,
}))
@reduxForm({ form: "login", enableReinitialize: true })
class Login extends React.Component {
  componentWillMount(){
    const title = "Login | KARAF"
    document.title = title
  }

  setRegisterForm(){
    this.props.dispatch(loginCStoreActions.setRegisterForm());

    // Réinitialise step of form
    this.props.dispatch(loginCStoreActions.setCurrentValue(0));
    // Réinitialize user user values
    this.props.dispatch(loginCStoreActions.setUserValue(null));
  }


  setLoginForm(){
    this.props.dispatch(loginCStoreActions.setLoginForm());
    this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(null));
  }


  next(formValues) {
    const loading = true
    this.props.dispatch(loginCStoreActions.setBtnLoading(loading));

    const email = formValues.email
    this.props.dispatch(loginCStoreActions.setEmail(email));


    // We will use axios there to fetch if user exits
    window.axios
      .post("/api/profiles/check/email", { email : email })
      .then(response => {
        console.log('response >> ', response);
        const loading = false
        this.props.dispatch(loginCStoreActions.setBtnLoading(loading));

        const checked = true
        this.props.dispatch(loginCStoreActions.setChecked(checked));

        const current = this.props.loginCStore.current + 1;
        this.props.dispatch(loginCStoreActions.setCurrentValue(current));

        const user = response.data.data
        this.props.dispatch(loginCStoreActions.setUserValue(user));
      })
      .catch(error => {
        const loading = false
        this.props.dispatch(loginCStoreActions.setBtnLoading(loading));

        const message = error.response.data.message
        this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(message));
      });
  }
      

  prev() {
    const current = this.props.loginCStore.current - 1;
    this.props.dispatch(loginCStoreActions.setCurrentValue(current));

    // Réinitialize user user values
    this.props.dispatch(loginCStoreActions.setUserValue(null));
    this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(null));
  }


  _handleLogin(formValues){
    const loading = true
    this.props.dispatch(loginCStoreActions.setLoading(loading));

    const { email } = this.props.loginCStore
    const password = formValues.password
    const credentials = {
      email: email,
      password: password,
    };

    window.axios
      .post("/api/auth/login", credentials)
      .then(response => {
        this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(null));
        console.log('response >> ', response);
        const loading = false
        this.props.dispatch(loginCStoreActions.setLoading(loading));

        let data = response.data.data

        // Save loggedIn user on localStorage
        saveUser(JSON.stringify(data.userprofile));

        // Save token on localStorage
        saveToken(data.token)
        let param = new URLSearchParams(this.props.location.search);
        console.log("param ", param.get('redirect'))

        if(!param.get('redirect')){
          window.location.href = "/"; 
        } else {
          window.location.href = param.get('redirect'); 
        }
      })
      .catch(error => {        
        const loading = false
        this.props.dispatch(loginCStoreActions.setLoading(loading));

        const message = error.response.data.message
        this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(message));
      });

  }


  _handleRegister(formValues){
    console.log('FormValues register >>>', formValues);
    const loading = true
    this.props.dispatch(loginCStoreActions.setBtnLoading(loading));

    const data = {
      name: formValues.register_email,
      email: formValues.register_email,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      password: formValues.register_password,
      password_confirmation: formValues.password_confirmation,
      birthdate: formValues.birthdate
    }


    window.axios
      .post("/api/auth/register", data)
      .then(response => {
        this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(null));
        console.log('response >> ', response);
        const loading = false
        this.props.dispatch(loginCStoreActions.setBtnLoading(loading));

        window.location.href = "/login"; 
        /* if(this.props.location.search){
          window.location.href = "/"; 
        } else {
          let param = new URLSearchParams(this.props.location.search);
          window.location.href = param.get('redirect'); 
        } */
      })
      .catch(error => {        
        const loading = false
        this.props.dispatch(loginCStoreActions.setBtnLoading(loading));

        /* const message = error.response.data.message
        this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(message)); */
      });
  }


  _handleEmailChange(val){
    this.props.dispatch(loginCStoreActions.setUnknwoUserMessage(null));
  }

  onCheckChange(e){
    this.props.dispatch(loginCStoreActions.setCheckBox(e.target.checked));
  }



  render() {
    const { current, loading, checked, user, 
            login, register, unknowMessage, 
            btnLoading, boxChecked, submitting, 
            pristine } = this.props.loginCStore;

    return (
      <div className="background">
        { btnLoading &&
        <div className="cover-spiner">
          <div className="whirly-loader" style={{ position: "absolute", left: "48%", top: "40%" }}></div>
        </div>}
        <div className="container">
          <div className="row" style={{ paddingTop: "100px" }}>
            <div id="block1" className="col-sm-6">
              <img className="img-fluid logo" src="/images/logo_complet.png" alt={"Logo karaf"} />
              <br />
              <p className="logo_subtext">Imaginez un monde dans lequel tout est à l'endroit, où retrouver tous vos amis, proches, kiffs mais aussi votre business... Partager votre art, cultures et hobbies avec vos proches où que vous soyez.
              </p>

              <div className="register_button_acton">
                <button 

                  className="btn btn-outline-light btn-md"
                >
                  S'inscrire et YAMO !
                </button>
              </div>
            </div>

            <div className="col-sm-6">
                <div id="block2">
                  <h4 className="text-center connectTitle">Se connecter</h4>

                  {/* <Steps current={current}>
                    {steps.map(item => (
                      <Step key={item.title} title={item.title} />
                    ))}
                  </Steps> */}
                  
                  {current === 0 && (              
                    <div className="steps-content">
                      <Form className="login-form">
                        <div className="iconUser text-center">
                          <i className="far fa-user-circle fa-4x"></i>
                        </div>
                        <Field 
                          className="form-control"
                          component={renderField}
                          type="email"
                          placeholder={"Email"}
                          name="email"
                          autoFocus
                          validate={[required, email]}
                          onChange = {e => this._handleEmailChange(e)}
                        />
                          { unknowMessage && 
                            <span
                              style={{
                                paddingLeft: "0",
                                paddingRight: "1em",
                                color: "red",
                                fontSize: "0.8em",
                                fontStyle: "italic",
                                display: "block",
                                paddingTop: "8px"
                              }}
                            >
                              { unknowMessage }
                            </span>
                          }
                        <br />
                        <div className="steps-action">
                          <Button 
                            type="primary" 
                            disabled={
                              this.props.submitting ||
                              this.props.pristine
                            }
                            onClick = {this.props.handleSubmit(this.next.bind(this))}
                          >
                            Suivant &nbsp;
                            { btnLoading &&
                                <Spin indicator={antIcon} />
                            }
                          </Button>
                        </div>
                      </Form>
                    </div>)
                  }

                    {current === 1 && (              
                      <div className="steps-content">
                        <Form>
                            <div className="iconUser text-center">
                            { user ? user.picture_path ? 
                                <img className="img-fluid img-thumbnail login_picture" src={user.picture_path} alt={ user.username } /> 
                                  : 
                                <i className="far fa-user-circle fa-5x"></i> 
                                :
                              <i className="far fa-user-circle fa-5x"></i> 
                            }

                            { checked &&
                                <h6 className='text-center' style={{ paddingTop: "10px" }}>
                                  Bienvenu <b><i>{ user?user.email:'Johhn Doe' }</i></b>
                                </h6>
                            }
                          </div>
                          <label htmlFor="password">Mot de passe</label><br />
                          <Field 
                            className="form-control"
                            component={renderField}
                            type="password"
                            name="password"
                            label="Votre mot de passe"
                            autoFocus
                            validate={[required, minLength6]}
                          />
                          { unknowMessage && 
                            <span
                              style={{
                                paddingLeft: "0",
                                paddingRight: "1em",
                                color: "red",
                                fontSize: "0.8em",
                                fontStyle: "italic",
                                fontWeight: "bold",
                                display: "block",
                                paddingTop: "8px"
                              }}
                            >
                              { unknowMessage }
                            </span>
                          }
                          <p style={{ marginTop: "10px" }}>
                            <Checkbox
                              checked={ boxChecked }
                              onChange={ e => this.onCheckChange(e) }
                            >
                              Se souvenir de moi
                            </Checkbox>
                          </p>
                          <br />
                          <div className="row mr-auto ml-auto">
                            <Button 
                              type="primary" 
                              disabled={
                                this.props.submitting ||
                                this.props.pristine
                              }
                              onClick = {this.props.handleSubmit(this._handleLogin.bind(this))}
                            >
                              connexion
                            </Button>

                            <Button 
                              style={{ marginLeft: 8 }} 
                              onClick={() => this.prev()}
                            >
                              Annuler
                            </Button>
                          </div>
                        </Form>
                      </div>)
                    }
                  
                </div>
                

                { register == true &&
                  <div id="block2" className="">
                    <h3 className="text-center connectTitle">S'inscrire</h3>

                    <div className="registerFormWrapper">
                      <Form>
                        <FormGroup>
                          <label htmlFor="first_name">Nom</label>
                          <Field 
                            className="form-control"
                            component={renderField}
                            type="text"
                            name="first_name"
                            autoFocus
                            validate={[required, minLength2]}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label htmlFor="last_name">Prénom</label>
                          <Field 
                            className="form-control"
                            component={renderField}
                            type="text"
                            name="last_name"
                            validate={[required, minLength2]}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label htmlFor="email">Email</label>
                          <Field 
                            className="form-control"
                            component={renderField}
                            type="email"
                            name="register_email"
                            validate={[required, email]}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label htmlFor="register_password">Mot de passe</label>
                          <Field 
                            className="form-control"
                            component={renderField}
                            type="password"
                            name="register_password"
                            validate={[required, minLength6]}
                          />
                        </FormGroup>
                        <FormGroup>
                          <label htmlFor="password_confirmation">Confirmation mot de passe</label>
                          <Field 
                            className="form-control"
                            component={renderField}
                            type="password"
                            name="password_confirmation"
                            validate={[required, passwordMatch]}
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="birthdate">Date de naissance</label>
                          <Field 
                            className="form-control"
                            component={renderField}
                            type="date"
                            name="birthdate"
                            validate={[required]}
                          />
                        </FormGroup>

                        <Button 
                          type="primary" 
                          disabled={
                            this.props.submitting ||
                            this.props.pristine
                          }
                          onClick = {this.props.handleSubmit(this._handleRegister.bind(this))}
                        >
                            Valider
                        </Button>
                      </Form>
                    </div>
                  </div>
                }

            </div>
          </div>

          <div className="row footer">
            <div className="col-md-4">
              <p className="footer-language">
                <i style={{ paddingRight: "5px" }} className="fa fa-language"></i> <button className="btn btn-link active">Français</button> <span style={{ padding: "0px 10px" }}>|</span> <button className="btn btn-link">English</button>
              </p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <p className="footer-copyright">
                &copy; Copyright Karaf 2020, tous droits reservés
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }


}