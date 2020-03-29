import React from "react";
import { connect } from "react-redux";
import Navbar from '../Snippets/Navbar/index';

import './style.local.scss';



export default
@connect((state, props) => ({}))
class MusicHome extends React.Component {
  componentWillMount() {
    document.title = 'Music Home'
  }



  render() {
    // const { formatMessage } = this.props.intl;

    return (
      //<!-- Document Wrapper -->
      <div className="container-fluid music_home">
        <Navbar />

        <div className="music_header">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-4 music_form_search">
                {/* <form class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input type="text" class="form-control" placeholder="Search" />
                </form> */}
                <form class="input-group custom-search-form">
                  <input type="text" class="form-control" placeholder="Rechercher un album" />
                  <span class="input-group-btn">
                    <button class="btn btn-light" type="button">
                      <span class="fa fa-search"></span>
                    </button>
                    </span>
                </form> 
              </div>

              <div className="col-md-2">
                <div className="music_home_badge">
                  <span class="badge badge-karaf-gold">20</span>
                </div>
                <div className="music_home_shop_bag">
                  <div className="row ml-auto mr-auto">
                    <span class="fa fa-shopping-bag fa-3x text-karaf-pink"></span>
                  </div>
                  <div className="row mr-auto ml-auto">
                    <p style={{ textAlign: "center" }}>Panier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar navbar-expand-lg navbar-light subnav" style={{ backgroundColor: "rgba(245, 157, 192, 0.34)", paddingTop: "0px", paddingBottom: "0px"  }}>
          <div class="container">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Albums <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Artistes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Labels</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Podcast</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Blogs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row music_carousel_container">
          <div className="col-md-8 home music_carousel_container_wrapper">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <img class="d-block w-100" src="/images/11.jpg" alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/images/magas.jpg" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/images/nabila.jpg" alt="Third slide" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <div className="row home_carousel_row">
              <div className="home_carousel_row_wrapper"></div>
            </div>
            <div className="row home_carousel_row">
              <div className="home_carousel_row_wrapper"></div>
            </div>
            <div className="row home_carousel_row">
              <div className="home_carousel_row_wrapper"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
