import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";

import { withRouter } from "react-router";
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";

const styles = {
  card: {
    position: "absolute",
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    background: "#0005",
    opacty: 0.2,
    borderRadius: "50%"
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
  }

  componentDidMount() {
    const element = document.getElementById(this.props.id);
    element.style.top = `${this.props.top}px`;
    element.style.left = `${this.props.left}px`;
    const rect = element.getBoundingClientRect();
    const addEvent = {
      id: this.props.id,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      func: this.props.func
    };
    this.props.actions.addComponentEvent(addEvent);
  }
  componentWillUnmount() {
    this.props.actions.deleteComponentEvent(this.props.id);
  }

  render() {
    const { classes, id } = this.props;
    const { card } = classes;
    return <div id={id} className={card} />;
  }
}

// id func x y
export default MoveLinkEvent;
