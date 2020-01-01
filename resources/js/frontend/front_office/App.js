import React, { Component } from "react";
import { connect } from "react-redux";
import { appCStoreActions } from "./store";

export default
@connect((state, props) => ({
  developer: state.appCStore.developer
})) 
class App extends Component {
  componentWillMount() {
    document.title = 'Home | Karaf';
    console.log("Developper: ", this.props.developer)

    this.props.dispatch(appCStoreActions.setDeveloperName('Developer Lambda'));
  }


  render() {
    console.log("Developper name after: ", this.props.developer)
    
    return (
      <div>
        <h1>Bienvenu dans Karaf {this.props.developer}</h1>
      </div>
    );
  }

}
