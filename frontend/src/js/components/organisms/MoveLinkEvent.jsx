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
    height: 150,
    background: "#CC3333"
  },
  cardSquare: {
    minWidth: 150,
    maxWidth: "80vw",
    height: 100,
    background: "#CC3333"
  },
  mediaCircle: {
    position: "relative",
    top: "32px",
    color: "#fff"
  },
  mediaSquare: {
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

  componentDidMount() {
    const element = document.getElementById(this.props.id);
    const rect = element.getBoundingClientRect();
    const addEvent = {
      id: this.props.id,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      func: this.props.func
    };
    console.table(addEvent);
    this.props.actions.addComponentEvent(addEvent);
  }
  componentWillUnmount() {
    this.props.actions.deleteComponentEvent(this.props.id);
  }

  onOver() {
    console.log("over event");
  }
  onOut() {
    console.log("out event");
  }

  render() {
    const { classes, id, circle } = this.props;
    const { cardCircle, cardSquare, mediaCircle, mediaSquare } = classes;
    const card = circle ? cardCircle : cardSquare;
    const media = circle ? mediaCircle : mediaSquare;
    return (
      <Card
        id={id}
        className={card + " OverEventClass"}
        onMouseOver={this.onOver.bind(this)}
        onMouseOut={this.onOut.bind(this)}
      >
        <CardContent>
          <Typography align="center" className={media} variant="display2">
            {this.props.children}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

// id func children circle
export default MoveLinkEvent;
