import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Skeleton } from 'antd';

import Navbar from '../Snippeds/Navbar/index';

import './style.local.scss';



export default
@connect((state, props) => ({}))
class Profil extends React.Component {
  componentWillMount() {
    document.title = 'Profile | KARAF'
  }

  

  render() {

    return (
      //<!-- Document Wrapper -->
      <div className="container-fluid home">
        <Navbar />
        
        <div className="profile_wrapper">
          <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <div className="profile_header">
              <div className="profile_header_inside">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 profile_header_user">
                      <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                          <div className="col-md-4">
                              <img className="img-fluid rounded-circle img-thumbnail" src="images/helium.jpg" />
                          </div>
                          <div className="col-md-8">
                              <h5>John Doe</h5>
                              <p><i class="fa fa-circle text-success"></i> Disponible</p>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-6 text-right profile_header_button">
                      <button className="btn btn-secondary">Envoyer une demande</button> &nbsp; &nbsp;
                      <button className="btn btn-secondary">Envoyer message</button> &nbsp; &nbsp;
                      <button className="btn btn-secondary">Abonnement</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container body">
          <div className="row profil_analytic" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <div className="profil_analytic_wrapper">
            </div>
          </div>
          <div className="row profile_pub" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <div className="col-md-3">
              <div className="row" style={{ marginLeft: "0px", marginRight: "0px", backgroundColor: "#fff", width: "100%", borderRadius: "20px" }}>
                <div className="profil_about_me_header">
                  <h5>A propos de moi</h5>
                </div>
                <div className="profil_about_me_content">
                  <p className="profil_about_me_sumary">
                    Bonjour je m'appelle John Doe, je suis etc...Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos obcaecati animi ea consequuntur.
                  </p>
                  <p>
                    <span className="left">Inscription: </span>
                    <span className="right">30 Juin 2020</span>
                  </p>
                  <p>
                    <span className="left">Ville: </span>
                    <span className="right">Douala, Littoral</span>
                  </p>
                  <p>
                    <span className="left">Pays: </span>
                    <span className="right">Cameroun</span>
                  </p>
                  <p>
                    <span className="left">Age: </span>
                    <span className="right">27 ans</span>
                  </p>
                  <p>
                    <span className="left">Site web: </span>
                    <span className="right">
                      <a href="https://google.com">www.monsite.com</a>
                    </span>
                  </p>
                </div>
              </div>
              <br />
              <div className="row" style={{ marginLeft: "0px", marginRight: "0px", backgroundColor: "#fff", height: "300px", width: "100%", borderRadius: "20px" }}>
              </div>
              <br />
              <div className="row" style={{ marginLeft: "0px", marginRight: "0px", backgroundColor: "#fff", height: "300px", width: "100%", borderRadius: "20px" }}></div>
            </div>
            
            <div className="col-md-6 feedWrapper">
              <div className="card_publication_header">
                <h5>Quoi de neuf</h5>
              </div>

              <div className="card publication">
                <div className="row cardPubContent">
                  <div className="col-md-2 img-pub-wrapper">
                    <img className="img-fluid" src="images/helium.jpg" />
                  </div>
                  <div className="col-md-10" style={{ paddingRight: "0px" }}>
                    <div className="publicationText">
                        <textarea name="" id="txt" className="form-control"></textarea>
                        <button className="btn btn-outline-primary">publier</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginRight: "0px", marginLeft: "0px" }}>
                <div className="cardPubFooter"></div>
              </div>

              <div className="pubLishtFeed">
                <div className="card pubListFeedItem">
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                </div>
                <div className="card pubListFeedItem">
                  <Skeleton active avatar paragraph={{ rows: 5 }} />
                </div>
                <div className="card pubListFeedItem">
                  <Skeleton active avatar paragraph={{ rows: 5 }} />
                </div>
                <div className="card pubListFeedItem">
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                </div>
              </div>

            </div>
            
            <div className="col-md-3">
              <div className="row" style={{ marginLeft: "0px", marginRight: "0px", backgroundColor: "#fff", borderRadius: "20px" }}>
                <div className="profil_pictures_header">
                  <h5>Photos</h5>
                </div>
                <div className="profil_pictures_content">
                  <div className="row" style={{ marginLeft: "0px", marginRight: "0px"}}>
                    <div className="col-md-4 profil_picture_image">
                      <img className="img-fluid  img-thumbnail" src="images/helium.jpg" />
                    </div>
                    <div className="col-md-4 profil_picture_image">
                      <img className="img-fluid  img-thumbnail" src="images/helium.jpg" />
                    </div>
                    <div className="col-md-4 profil_picture_image">
                      <img className="img-fluid  img-thumbnail" src="images/helium.jpg" />
                    </div>
                  </div>
                  <div className="row" style={{ marginLeft: "0px", marginRight: "0px"}}>
                    <div className="col-md-4 profil_picture_image">
                      <img className="img-fluid  img-thumbnail" src="images/helium.jpg" />
                    </div>
                    <div className="col-md-4 profil_picture_image">
                      <img className="img-fluid  img-thumbnail" src="images/helium.jpg" />
                    </div>
                    <div className="col-md-4 profil_picture_image">
                      <img className="img-fluid  img-thumbnail" src="images/helium.jpg" />
                    </div>
                  </div>
                </div>
              </div>
                <br />
                <div className="row" style={{ marginLeft: "0px", marginRight: "0px", backgroundColor: "#fff", height: "300px", width: "100%", borderRadius: "20px" }}></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
