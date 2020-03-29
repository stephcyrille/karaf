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
        <div className="home_menu_left">
            <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
                <div className="col-md-4 img-wrapper">
                    <img className="img-fluid rounded-circle img-thumbnail" src="images/helium.jpg" />
                </div>
                <div className="col-md-8">
                    <h5>John Doe</h5>
                    <p><i class="fa fa-circle text-success"></i> Disponible</p>
                </div>
            </div>
        
        </div>

        <div className="row left_menu_line" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <ul className="list-group list-group-flush home">
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="#">
                        <i className="fa fa-rss" style={{ paddingRight: "5px" }}></i>Fil d'actualité
                        <span className="badge badge-warning badge-pill" style={{ marginLeft: "5px" }}>8+</span>
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="#">
                        <i className="fa fa-envelope" style={{ paddingRight: "5px" }}></i>Messages
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="#">
                        <i className="fa fa-users" style={{ paddingRight: "5px" }}></i>Tous mes groupes
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="#">
                        <i className="fa fa-sticky-note" style={{ paddingRight: "5px" }}></i>Pages
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="#">
                        <i className="fa fa-store" style={{ paddingRight: "5px" }}></i>Boutique
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="/music">
                        <i className="fa fa-music" style={{ paddingRight: "5px" }}></i>Music Store
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="#">
                        <i className="fa fa-wallet" style={{ paddingRight: "5px" }}></i>Porte feuille
                        {/* <span className="badge badge-secondary badge-pill" style={{ marginLeft: "5px" }}>8+</span> */}
                    </a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center specialLink"> 
                    <a href="#">
                        <i className="fa fa-ellipsis-h" style={{ paddingRight: "5px" }}></i>Voir plus
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