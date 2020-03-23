import React from "react";
import { connect } from "react-redux";
import { clearToken, clearUser } from '../../../../libs/utils/auth_utils';

import './style.local.scss';


export default
@connect((state, props) => ({}))
class Navbar extends React.Component {
  componentWillMount() {
    document.title = 'Home | KARAF'
  }

  logout(){
    clearToken()
    clearUser()
    window.location.href = "/login"
  }


  render() {

    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#bda42c", paddingTop: "0px", paddingBottom: "0px" }}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="img-fluid rounded-circle" src="/images/logo.png" width="50px" style={{ backgroundColor: "#636363" }} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0 nav-form">
                <input className="form-control mr-sm-2 navFormInput" type="search" placeholder="Rechercher" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
              </form>
              
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* <i className="fa fa-user text-white"></i> */}
                  <img className="img-fluid rounded" src="images/astro.jpg" width="30px" style={{ border: "2px solid #e0e0e0" }} />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={ () => this.logout() }><i className="fas fa-sign-out-alt text-white"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
