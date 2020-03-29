import React from "react";
import { connect } from "react-redux";

import './style.local.scss';


export default
@connect((state, props) => ({}))
class Suggestion extends React.Component {



  render() {

    return (
      <div className="suggestion_whole_wrapper">
        <div className="suggestion_header">
            <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                <h5>Suggestion</h5>
            </div>
        </div>

        <div className="suggestion_wrapper">
            {/* Line 1 */}
            <div className="row suggestion_line">
                <div className="col-md-3" style={{ paddingLeft: '0px' }}>
                    <img className="img-fluid rounded" src="images/nabila.jpg" />
                </div>
                <div className="col-md-6 suggestion_body" style={{ padding: '0px' }}>
                    <h4 className="">Biscuit de Mer</h4>
                    <h5 className="">Web influenceuse</h5>
                </div>
                <div className="col-md-3 suggestion_count">
                    <button 
                        className="btn btn-outline-secondary suggestionFollow"
                    >
                        Suivre
                    </button>
                </div>
            </div>
            {/* EndLine 1 */}

            {/* Line 2 */}
            <div className="row suggestion_line">
                <div className="col-md-3" style={{ paddingLeft: '0px' }}>
                    <img className="img-fluid rounded" src="images/kemayo.jpg" />
                </div>
                <div className="col-md-6 suggestion_body" style={{ padding: '0px' }}>
                    <h4 className="">Le Cartel</h4>
                    <h5 className="">Financier</h5>
                </div>
                <div className="col-md-3 suggestion_count">
                    <button 
                        className="btn btn-outline-secondary suggestionFollow"
                    >
                        Suivre
                    </button>
                </div>
            </div>
            {/* EndLine 2 */}


           
        </div>
        <div className="row suggestion_line">
            <div className="col-md-12" style={{ paddingBottom: '10px' }}>
                <button 
                    className="btn btn-light suggestionSeeMore"
                >
                    Voir plus...
                </button>
            </div>
        </div>
      </div>
    )
  }
}