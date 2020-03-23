import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Tabs, Icon, Input, Skeleton} from 'antd';
import { clearToken, clearUser } from '../../../libs/utils/auth_utils';

import Navbar from '../Snippeds/Navbar/index';
import Release from '../Snippeds/Release/index';
import Suggestion from '../Snippeds/Suggestion/index';
import LeftMenu from '../Snippeds/LeftMenu/index';

import './style.local.scss';



const { TabPane } = Tabs;
const { TextArea } = Input;

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

  inPutonChange(e){
    console.log(e);
  }

  render() {
    // const { formatMessage } = this.props.intl;

    return (
      //<!-- Document Wrapper -->
      <div id="wrapper" className="container-fluid home">
        <Navbar />

        <div className="container-fluid homeBody">
          <div className="row">
            <div className="col-xs-12 col-md-2 leftNavWrapper">
              <LeftMenu />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 feedWrapper">
              <div className="card publication">
                <Tabs defaultActiveKey="1" style={{ padding: "10px" }} >
                  <TabPane
                    tab={
                      <span>
                        <i className="fa fa-"></i>
                        Publication
                      </span>
                    }
                    key="1"
                  >
                    <TextArea placeholder="Exprimez votre mood du moment..." allowClear onChange={this.inPutonChange} rows={4} />
                    <div className="pubButtonWrapper">
                      <button className="btn btn-primary">Publier</button> &nbsp;
                      <button className="btn btn-light">Annuler</button>
                    </div>   
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <Icon type="android" />
                        Status
                      </span>
                    }
                    key="2"
                  >
                    <TextArea placeholder="Text ou media..." allowClear onChange={this.inPutonChange} rows={4} />
                    <div className="pubButtonWrapper">
                      <button className="btn btn-primary">Envoyer</button> &nbsp;
                      <button className="btn btn-secondary">param</button>&nbsp;
                      <button className="btn btn-light">Annuler</button>
                    </div>  
                  </TabPane>

                  <TabPane
                    tab={
                      <span>
                        <Icon type="android" />
                        Vote
                      </span>
                    }
                    key="3"
                  >
                    <Skeleton active paragraph={{ rows: 1 }} />
                    <div className="pubButtonWrapper">
                      <button className="btn btn-primary">soumettre</button> &nbsp;
                      <button className="btn btn-light">Annuler</button>
                    </div>  
                  </TabPane>
                </Tabs> 
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

            <div className="col-xs-12 col-md-1 rightNavWrapper">
              
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
