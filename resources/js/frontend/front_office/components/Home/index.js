import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

export default
@injectIntl
@connect((state, props) => ({}))
class Index extends React.Component {
  componentWillMount() {
    document.title = 'Home | Fac\'Social'
  }

  render() {
    // const { formatMessage } = this.props.intl;

    return (
      //<!-- Document Wrapper -->
      <div id="wrapper" className="wrapper clearfix">
        <h1>Hello good morning</h1>
        <div id="back-to-top" className="backtop">
          <i className="fa fa-long-arrow-up" />
        </div>
      </div>
    );
  }
}
