import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

import { withRouter } from "react-router";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    borderRadius: "50%",
    width: 150,
    height: 150,
    background: "#CC3333"
  },
  media: {
    position: "relative",
    top: "35px",
    color: "#fff"
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });

@withStyles(styles)
@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class MoveLinkEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    };
  }

  moveToLink() {
    this.props.history.push(this.props.href);
  }

  componentDidMount() {
    const event = document.getElementsByClassName("OverEventClass");
    const rect = event[0].getBoundingClientRect();
    const addEvent = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      func: this.moveToLink.bind(this)("/tutorial")
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card + " OverEventClass"}>
        <CardContent>
          <Typography className={classes.media} variant="display2">
            NEXT
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default MoveLinkEvent;
