import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

import { withRouter } from "react-router";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";

const styles = {
  cardCircle: {
    borderRadius: "50%",
    width: 150,
    height: 100,
    background: "#CC3333"
  },
  cardSquare: {
    minWidth: 150,
    maxWidth: "80vw",
    height: 100,
    background: "#CC3333"
  },
  media: {
    position: "relative",
    top: "12px",
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
    const element = document.getElementById(this.props.id);
    const rect = element.getBoundingClientRect();
    const addEvent = {
      id: this.props.id,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      func: this.moveToLink.bind(this)
    };
    console.table(addEvent);
    this.props.actions.addComponentEvent(addEvent);
  }

  render() {
    const { classes, id, circle } = this.props;
    const { cardCircle, cardSquare } = classes;
    const card = circle ? cardCircle : cardSquare;
    return (
      <Card id={id} className={card + " OverEventClass"}>
        <CardContent>
          <Typography
            align="center"
            className={classes.media}
            variant="display2"
          >
            {this.props.children}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default MoveLinkEvent;
