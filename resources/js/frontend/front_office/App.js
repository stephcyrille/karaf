import React, { Component } from "react";
import { connect } from "react-redux";


export default
// @connect((state, props) => ({
// })) 
class App extends Component {
  componentWillMount() {
    document.title = 'Home | Karaf'
  }

  render() {
    return (
      <div>
        <h1>Bienvenu dans Karaf</h1>
      </div>
    );
  }

}
