import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import { Button } from "@material-ui/core";
import styles from "scss/test.scss";

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
    this.video;
  }
  componentDidMount() {
    this.video = document.getElementById("video");
  }

  onLoadEvent() {
    document.getElementById("video").play();
  }
  onStopEvent() {
    document.getElementById("video").pause();
  }
  onTimeUpdate() {
    console.log(this.video);
    console.log(this.video.currentTime);
    console.log(this.video.pageX);
    console.log(this.video.pageY);
  }
  onEnded() {
    console.log("end");
  }

  nowLoad(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <video
          className={styles.movie}
          onTimeUpdate={this.onTimeUpdate.bind(this)}
          id="video"
          onPlaying={this.nowLoad.bind(this)}
          width="100%"
          src="http://localhost:3000/movies/IMG_9965.MOV"
          autoPlay
        />
        <Button onClick={this.onLoadEvent.bind(this)}>再生</Button>
        <Button onClick={this.onStopEvent.bind(this)}>停止</Button>
      </div>
    );
  }
}

export default Movie;
