import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { injectIntl } from "react-intl";
import { Skeleton } from 'antd';
import { reduxForm, Field, propTypes as reduxFormPropTypes } from "redux-form";

import Navbar from '../Snippeds/Navbar/index';
import Release from '../Snippeds/Release/index';
import Suggestion from '../Snippeds/Suggestion/index';
import LeftMenu from '../Snippeds/LeftMenu/index';
import Publication from './PublicationCard/index';

import './style.local.scss';

import _ from "underscore";
import { publicationCStoreActions } from './store';
import moment from "moment";
import { getUser } from '../../../libs/utils/auth_utils';



export default
@injectIntl
@connect((state, props) => ({
  publicationCStore: state.publicationCStore,
}))
@reduxForm({ form: "homeForm", enableReinitialize: true })
class Index extends React.Component {
  componentWillMount() {
    document.title = 'Home | KARAF'
  }

  componentDidMount(){
    this._fetchPublication()
  }

  _fetchPublication() {
    this.props.dispatch(publicationCStoreActions.toggleSkeleton(true));

    window.axios
      .get(
        `/api/publications/all`
      )

      .then(response => {
        this.props.dispatch(
          publicationCStoreActions.setAllPublications(
            response.data.data
          )
        );
        this.props.dispatch(publicationCStoreActions.toggleSkeleton(false));
      })
      .catch(error => {
        console.error(error);
        this.props.dispatch(publicationCStoreActions.toggleSkeleton(false));
      });

      this.props.reset();
  }


  _handlePostForm(formValues){
    console.log('FormValues post >>>', formValues);
    var user = getUser()
    var content = formValues.postContent
    var created_by = user.id

    console.log('posted publication before>> ', this.props.publicationCStore.posted_publication);
    

    window.axios
      .post(`/api/publications/add`, { content : content,  created_by: created_by})

      .then(response => {
        console.log('response >> ', response);
        this._fetchPublication()
      })
      .catch(error => {
        console.error(error);
      });
  }

  

  render() {
    var publicationList = this.props.publicationCStore.all_publications
    var skeletton = this.props.publicationCStore.show_skelleton

    publicationList.sort((left, right) => { return moment.utc(right.created_at).diff(moment.utc(left.created_at))})

    console.log("Store pub values -----------", publicationList)

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
                    <form className="publicationText">
                        <Field 
                          name="postContent" 
                          id="txt" 
                          className="form-control"
                          component="textarea"
                          type="text"
                        />
                        <button 
                          className="btn btn-outline-primary"
                          disabled={
                            this.props.submitting ||
                            this.props.pristine
                          }
                          onClick = {this.props.handleSubmit(this._handlePostForm.bind(this))}
                        >
                          publier
                        </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginRight: "0px", marginLeft: "0px" }}>
                <div className="cardPubFooter"></div>
              </div>
              
              <div className="pubLishtFeed">
                { skeletton ? 
                  (
                    <div className="">
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
                  ):
                  (
                    <div className="">
                      {
                        !_.isEmpty(publicationList) ? publicationList.map(
                          ((val, key) => {
                            return (
                              <div className="card pubListFeedItem" key = {key}> 
                                  <Publication 
                                    username={`${val.created_by.first_name} ${val.created_by.last_name}`} 
                                    content = { val.content} />
                              </div>)
                          })
                        ):(
                            <div className="card pubListFeedItem"> 
                              <Publication 
                                username={ 'Stéphane Cyrille Mebenga Atanga'} 
                                content = { 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, quas. Fugiat excepturi eius, tempora maiores explicabo quisquam deserunt! Aliquam qui aspernatur deleniti sapiente hic similique sequi officia. Accusamus, ea sunt!'} />
                            </div>
                        )
                      }
                    </div>
                  )
                  
                }

              </div>
            </div>

            <div className="col-xs-12 col-md-3">
              <Release />
              <br />
              <Suggestion />
            </div>

          </div>
        </div>

      </div>
    );
  }
}
