import React from "react";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import MoveLinkEvent from "~/components/organisms/MoveLinkEvent";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Index extends React.Component {
  render() {
    return (
      <div>
        <MoveLinkEvent id="moveToTutorial" href="/tutorial" />
      </div>
    );
  }
}

export default Index;
