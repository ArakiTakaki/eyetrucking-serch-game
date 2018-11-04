import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import style from "scss/test.scss";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = state => ({ store: state });

@hot(module)
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class MouseMove extends React.Component {
  constructor(props) {
    super(props);
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursor;
  }

  componentDidMount() {
    this.cursor = document.getElementById("cursor");
  }

  onMove(event) {
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
    this.cursor.style.left = `${this.mouseX}px`;
    this.cursor.style.top = `${this.mouseY}px`;
  }

  render() {
    return (
      <div onMouseMove={this.onMove.bind(this)} className={style.mousemove}>
        <div id="cursor" className={style.mousemove_test} />
      </div>
    );
  }
}

export default MouseMove;
