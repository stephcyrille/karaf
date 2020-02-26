import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import './style.local.scss'



export default
@connect((state, props) => ({}))
class NotFound extends React.Component {
	componentWillMount(){
    const title = "Page introuvable | KARAF"
    document.title = title
  }

  render(){

  	return (
  		<div className="body404">
  			<h3 className="text-center h3404">404 | Page introuvable</h3>
  		</div>
  	)
  }
}