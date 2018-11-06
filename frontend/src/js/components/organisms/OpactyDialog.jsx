import React from "react";
import { Typography, Grid, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = state => ({ store: state });

const styles = {
  root: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    top: 0,
    left: 0,
    opacty: 0.5
  }
};

@withStyles(styles)
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <p>test</p>
        </div>
      </div>
    );
  }
}

export default Body;
