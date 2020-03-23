import React from "react";
import { connect } from "react-redux";

import './style.local.scss';


export default
@connect((state, props) => ({}))
class Suggestion extends React.Component {



  render() {

    return (
      <div className="suggestion_wrapper">
        {/* Line 1 */}
        <h5 className="h5">Suggestions</h5>


        <div className="row suggestion_line">
            <div className="col-md-3">
                <img className="img-fluid rounded" src="images/astro.jpg" />
            </div>
            <div className="col-md-6 suggestion_body" style={{ padding: '0px' }}>
                <h4 className="">Astro World</h4>
                <h5 className="">Travis Scott</h5>
            </div>
            <div className="col-md-3 suggestion_count">
                <h6 className="">
                    <button 
                        className="btn btn-outline-secondary suggestionFollow"
                    >
                        Suivre
                    </button>
                </h6>
            </div>
        </div>
        {/* EndLine 1 */}

        {/* Line 2 */}
        <div className="row suggestion_line">
            <div className="col-md-3">
                <img className="img-fluid rounded" src="images/particula.png" />
            </div>
            <div className="col-md-6 suggestion_body" style={{ padding: '0px' }}>
                <h4 className="">Particular</h4>
                <h5 className="">Major Lazer</h5>
            </div>
            <div className="col-md-3 suggestion_count">
                <h6 className="">
                    <button 
                        className="btn btn-outline-secondary suggestionFollow"
                    >
                        Suivre
                    </button>
                </h6>
            </div>
        </div>
        {/* EndLine 2 */}


        <div className="row suggestion_line">
            <div className="col-md-12">
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