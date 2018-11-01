import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import Body from "../components/organisms/body";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = state => ({ store: state });

@hot(module)
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Body />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Root;
