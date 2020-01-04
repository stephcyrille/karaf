import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

//import libraries
import Routes from "./routes/routes";
import { IntlProvider } from "react-intl";
import _ from "underscore";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//import language
// import messages_en from "../components/languageSelector/translations/en.json";
// import messages_fr from "../components/languageSelector/translations/fr.json";
//import list of language
// import LanguageList from "../components/languageSelector/languageList/index";
//constant
// import { initAxios } from "../libs/utils/auth_utils";
//internationalization of andt component
// import { LocaleProvider } from "antd";
// import fr_FR from "antd/lib/locale-provider/fr_FR";
// import enUS from "antd/lib/locale-provider/en_US";
// import {getUserLanguage} from "app-js/libs/cookie_utils"

// initAxios();



export default
@connect((state, props) => ({
  // lang: state.languageSelectorCStore.language
}))
class App extends Component {
  constructor(props) {
    super(props);
    //cookie instance

    this.state = {
      defaultLanguage: "en", //define the default language
      frenchLanguage: "fr",
      // languages: Object.keys(LanguageList),
    };
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    window.addNotification = this.addNotification.bind(this);
  }


  addNotification(notificationData) {

    this.notificationDOMRef.current.addNotification(notificationData);
  }


  render() {
    let lang = 'fr'; 

    return (
        <IntlProvider
          locale={lang}
          key={lang} //force a full teardown until the underlying React context issue is resolved
        >
        <div>
          <ReactNotification ref={this.notificationDOMRef} />

            <Routes />
        </div>

        </IntlProvider>
    );
  }

}
