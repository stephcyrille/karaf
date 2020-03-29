import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#090a1f", paddingTop: "0px", paddingBottom: "0px" }}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="img-fluid rounded-circle" src="/images/logo.png" width="50px" style={{ backgroundColor: "#090a1f" }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                </li>
              </ul>
              
              <ul className="navbar-nav ml-auto">
                <form className="form-inline my-2 my-lg-0 nav-form">
                  <input className="form-control mr-sm-2 navFormInput" type="search" placeholder="Rechercher" aria-label="Search" />
                  <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
                <li className="nav-item" style={{ paddingTop: "5px" }}>
                  <Link className="nav-link" to="/music"><i className="fas fa-music text-white"></i> Music Store</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* <i className="fa fa-user text-white"></i> */}
                    <img className="img-fluid rounded-circle" src="images/helium.jpg" width="30px" style={{ border: "2px solid #e0e0e0" }} /> John Doe
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Messagerie</a>
                    <a className="dropdown-item" href="#">Groupes</a>
                    <a className="dropdown-item" href="#">Pages</a>
                    <a className="dropdown-item" href="#">Boutiques</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Paramètres</a>
                  </div>
                </li>
                <li className="nav-item" style={{ paddingTop: "5px" }}>
                  <a className="nav-link" href="#" onClick={ () => this.logout() }><i className="fas fa-sign-out-alt text-white"></i> Déconnexion</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
