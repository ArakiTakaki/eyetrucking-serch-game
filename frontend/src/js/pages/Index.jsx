import React from "react";
import { Typography, Grid } from "@material-ui/core";
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
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
          <Typography align="center" variant="display4">
            きになる隊
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <MoveLinkEvent id="moveToTutorial" href="/tutorial">
            チュートリアルを開始する
          </MoveLinkEvent>
        </Grid>
      </Grid>
    );
  }
}

export default Index;
