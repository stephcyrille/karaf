import React from "react";
import { connect } from "react-redux";
import './style.local.scss';

import urls from "../../../../routes/urls"

export default
@connect((state, props) => ({}))
class Navbar extends React.Component {
  componentWillMount() {
    document.title = 'Music | KARAF'
  }

  


  render() {

    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top navAlbum" style={{ backgroundColor: "#fff", paddingTop: "0px", paddingBottom: "0px" }}>
          <div className="container">
            <a className="navbar-brand" href={urls.MUSIC_HOME}>
              <img className="img-fluid rounded-circle" src="/images/logo.png" width="50px" /> Karaf Music Store
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
              
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item" style={{ paddingTop: "5px" }}>
                  <a className="nav-link text-success" href="#"><i className="fas fa-shopping-bag text-karaf-pink"></i> <span class="badge badge-karaf-pink">0</span></a>
                </li> 
                <li className="nav-item" style={{ paddingTop: "5px" }}>
                  <a className="nav-link text-karaf-gold" href="#"><i className="fas fa-wallet text-karaf-pink"></i> 5.000 XAF</a>
                </li>*/}
                <li className="nav-item" style={{ paddingTop: "5px" }}>
                  <a className="nav-link text-karaf-gold" href={urls.HOME}><i className="fas fa-rss text-karaf-pink"></i> Communauté</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">
                  {/* <i className="fa fa-user text-white"></i> */}
                    <img className="img-fluid rounded-circle" src="images/helium.jpg" width="30px" style={{ border: "2px solid #e0e0e0" }} /> John Doe
                  </a>
                </li>
                <li className="nav-item" style={{ paddingTop: "5px" }}>
                  <a className="nav-link text-secondary" href="#"><i className="fas fa-sign-out-alt text-secondary"></i> Déconnexion</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
