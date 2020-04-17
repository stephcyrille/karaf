import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { injectIntl } from "react-intl";
import { Skeleton } from 'antd';
import { clearToken, clearUser } from '../../../libs/utils/auth_utils';

import Navbar from '../Snippeds/Navbar/index';
import Release from '../Snippeds/Release/index';
import Suggestion from '../Snippeds/Suggestion/index';
import LeftMenu from '../Snippeds/LeftMenu/index';

import './style.local.scss';



export default
@injectIntl
@connect((state, props) => ({}))
class Index extends React.Component {
  componentWillMount() {
    document.title = 'Home | KARAF'
  }

  logout(){
    clearToken()
    clearUser()
    window.location.href = "/login"
  }

  

  render() {
    // const { formatMessage } = this.props.intl;

    return (
      //<!-- Document Wrapper -->
      <div id="wrapper" className="container-fluid home">
        <Navbar />

        <div className="container homeBody">
          {/* <div className="row">
            <div className="col-md-12">
              <img className="img-fluid" src="images/banner.png" />
            </div>
          </div> */}
          
          <br />

          <div className="row">
            <div className="col-xs-12 col-md-3 leftNavWrapper">
              <LeftMenu />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 feedWrapper">
              <div className="card_publication_header">
                <h5>Publier maintenant</h5>
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
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                </div>
                <div className="card pubListFeedItem">
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                </div>
                <div className="card pubListFeedItem">
                  <Skeleton active avatar paragraph={{ rows: 4 }} />
                </div>
              </div>

            </div>

            <div className="col-xs-12 col-md-3">
              <Release />
              <br />
              <Suggestion />
            </div>

          </div>
        </div>

        {/* <div id="back-to-top" className="backtop">
          <i className="fa fa-long-arrow-up" />
        </div> */}
      </div>
    );
  }
}
