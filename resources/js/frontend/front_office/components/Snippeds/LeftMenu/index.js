import React from "react";
import { connect } from "react-redux";

import './style.local.scss';


export default
@connect((state, props) => ({}))
class LeftMenu extends React.Component {



  render() {

    return (
      <div className="left_menu_wrapper">
        {/* Line 1 */}


        <div className="row left_menu_line">
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center"> 
                    <a href="#">
                        Fil d'actualité
                        <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span>
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center"> 
                    <a href="#">
                        Tendances 
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center"> 
                    <a href="#">
                        Signets 
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center"> 
                    <a href="#">
                        Groupes 
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center"> 
                    <a href="#">
                        Plus 
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
            </ul>
            
        </div>
        {/* EndLine 1 */}


      </div>
    )
  }
}