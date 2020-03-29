import React from "react";
import { connect } from "react-redux";

import './style.local.scss';


export default
@connect((state, props) => ({}))
class Release extends React.Component {



  render() {

    return (
      <div className="release_wrapper">
        <div className="release_header">
            <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                <h5>Dernières sorties</h5>
            </div>
        </div>

        <div className="release_body_wrapper">
             {/* Line 1 */}
            <div className="row release_line">
                <div className="col-md-5">
                    <img className="img-fluid" src="images/hp2.jpg" />
                </div>
                <div className="col-md-7 release_body" style={{ padding: '0px' }}>
                    <h4 className="">Hélliuminatit</h4>
                    <h5 className="">Hellium Protect</h5>
                    <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
                </div>
                <hr />
            </div>
            {/* EndLine 1 */}
            <br />


            {/* Line 2 */}
            <div className="row release_line">
                <div className="col-md-5">
                    <img className="img-fluid" src="images/bozar.jpg" />
                </div>
                <div className="col-md-7 release_body" style={{ padding: '0px' }}>
                    <h4 className="">Bob Marley</h4>
                    <h5 className="">Petit Bozar</h5>
                    <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
                </div>
                <hr />
            </div>
            {/* EndLine 2 */}
            <br />

            {/* Line 3 */}
            <div className="row release_line">
                <div className="col-md-5">
                    <img className="img-fluid" src="images/nabila.jpg" />
                </div>
                <div className="col-md-7 release_body" style={{ padding: '0px' }}>
                    <h4 className="">Ca va aller</h4>
                    <h5 className="">Nabila</h5>
                    <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
                </div>
                <hr />
            </div>
            {/* EndLine 3 */}
            <br />

            {/* Line 4 
            <div className="row release_line">
                <div className="col-md-5">
                    <img className="img-fluid" src="images/pnl.jpg" />
                </div>
                <div className="col-md-7 release_body" style={{ padding: '0px' }}>
                    <h4 className="">Deux freères</h4>
                    <h5 className="">PNL</h5>
                    <p className="">La nouveauté de l'artiste est un tube du genre urbain...</p>
                </div>
                <hr />
            </div>
            EndLine 4 */}

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
      </div>
    )
  }
}