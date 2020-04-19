import React from "react";
import { connect } from "react-redux";
// import { push } from "react-router-redux";
import PropTypes from "prop-types";

import './style.local.scss';



export default
@connect((state, props) => ({}))
class PublicationCard extends React.Component {
  componentWillMount() {

  }
  

  render() {

    return (
      //<!-- Document Wrapper -->
      <div className="publication_card_wrapper">
        <div className="publication_card_content">
            <div className="publication_card_header">
                <div className="row">
                    <div className="col-md-2 img-wrapper">
                        <img className="img-fluid rounded-circle img-thumbnail" src="images/helium.jpg" />
                    </div>
                    <div className="col-md-8">
                        <h5>{this.props.username}</h5>
                        <h6>Yaoundé, Cameroun</h6>
                    </div>
                    <div className="col-md-2 card_more_option">
                        <a href="#" role="button" id="publication_Dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-ellipsis-v" style={{ paddingRight: "5px" }}></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="publication_Dropdown">
                            <a className="dropdown-item" href="#"><i className="fa fa-bookmark" style={{ paddingRight: "5px" }}></i>Ajouter aux signets</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-flag" style={{ paddingRight: "5px" }}></i>Signaler</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-ellipsis-h" style={{ paddingRight: "5px" }}></i>etc</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="publication_card_body">
                <p>
                    {this.props.content}
                </p>
            </div>
            <div className="publication_card_footer">
            </div>
        </div>

      </div>
    );
  }
}


PublicationCard.propTypes = {
    username: PropTypes.string,
    content: PropTypes.string,
  };
  
