import React from "react";
import { connect } from "react-redux";

import './style.local.scss';


export default
@connect((state, props) => ({}))
class Release extends React.Component {



  render() {

    return (
      <div className="release_wrapper">
        <h5 className="h5">A la une</h5>

        {/* Line 1 */}
        <div className="row release_line">
            <div className="col-md-3">
                <img className="img-fluid rounded-circle img-thumbnail" src="images/astro.jpg" />
            </div>
            <div className="col-md-6 release_body" style={{ padding: '0px' }}>
                <h4 className="">Astro World</h4>
                <h5 className="">Travis Scott</h5>
                <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
            </div>
            <div className="col-md-3 release_count">
                <h6 className="">
                    {/* FAwS listen */}
                    <i className="fa fa-headphones"></i>
                    <span className="">2,534</span>
                </h6>
            </div>
            <hr />
        </div>
        {/* EndLine 1 */}

        {/* Line 2 */}
        <div className="row release_line">
            <div className="col-md-3">
                <img className="img-fluid rounded-circle img-thumbnail" src="images/particula.png" />
            </div>
            <div className="col-md-6 release_body" style={{ padding: '0px' }}>
                <h4 className="">Particular</h4>
                <h5 className="">Major Lazer</h5>
                <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
            </div>
            <div className="col-md-3 release_count">
                <h6 className="">
                    {/* FAwS listen */}
                    <i className="fa fa-headphones"></i>
                    <span className="">5,534</span>
                </h6>
            </div>
            <hr />
        </div>
        {/* EndLine 2 */}

        {/* Line 3 */}
        <div className="row release_line">
            <div className="col-md-3">
                <img className="img-fluid rounded-circle img-thumbnail" src="images/mzrt.jpg" />
            </div>
            <div className="col-md-6 release_body" style={{ padding: '0px' }}>
                <h4 className="">History</h4>
                <h5 className="">Ryan Lesly</h5>
                <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
            </div>
            <div className="col-md-3 release_count">
                <h6 className="">
                    {/* FAwS listen */}
                    <i className="fa fa-headphones"></i>
                    <span className="">1,534</span>
                </h6>
            </div>
            <hr />
        </div>
        {/* EndLine 3 */}

        {/* Line 4 */}
        <div className="row release_line">
            <div className="col-md-3">
                <img className="img-fluid rounded-circle img-thumbnail" src="images/pnl.jpg" />
            </div>
            <div className="col-md-6 release_body" style={{ padding: '0px' }}>
                <h4 className="">Deux freères</h4>
                <h5 className="">PNL</h5>
                <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
            </div>
            <div className="col-md-3 release_count">
                <h6 className="">
                    {/* FAwS listen */}
                    <i className="fa fa-headphones"></i>
                    <span className="">5,534</span>
                </h6>
            </div>
            <hr />
        </div>
        {/* EndLine 4 */}

        <div className="row release_line">
            <div className="col-md-12">
                <button 
                    className="btn btn-light releaseSeeMore"
                >
                    Voir plus...
                </button>
            </div>
        </div>
      </div>
    )
  }
}