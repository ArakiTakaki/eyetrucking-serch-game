import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import { Button } from "@material-ui/core";
import style from "../../../../scss/test.scss";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = state => ({ store: state });

@hot(module)
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursor;
  }
  componentDidMount() {
    this.cursor = document.getElementById("cursor");
  }
  onLoadEvent() {
    const video = document.getElementById("video");
    video.play();
  }
  onStopEvent() {
    const video = document.getElementById("video");
    video.pause();
  }
  onTimeUpdate() {
    const video = document.getElementById("video");
    console.log(video);
    console.log(video.currentTime);
    console.log(video.pageX);
    console.log(video.pageY);
  }

  nowLoad(event) {
    console.log(event);
  }

  onMove(event) {
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
    // console.log(this.cursor);
    this.cursor.style.left = `${this.mouseX}px`;
    this.cursor.style.top = `${this.mouseY}px`;
    // console.log(event.pageX);
    // console.log(event.pageY);
  }

  render() {
    return (
      <div>
        <div id="cursor" className={style.test} />
        <video
          onTimeUpdate={this.onTimeUpdate.bind(this)}
          id="video"
          onMouseMove={this.onMove.bind(this)}
          onPlay={this.nowLoad.bind(this)}
          width="100%"
          src="http://localhost:9000/IMG_9965.MOV"
        />
        <Button onClick={this.onLoadEvent.bind(this)}>再生</Button>
        <Button onClick={this.onStopEvent.bind(this)}>停止</Button>
      </div>
    );
  }
}

export default Movie;
