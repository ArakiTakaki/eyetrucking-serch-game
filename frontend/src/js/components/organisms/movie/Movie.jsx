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
    this.trucking = [];
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
    this.trucking.push({
      x: this.props.store.mouse.x,
      y: this.props.store.mouse.y,
      time: this.video.currentTime
    });
  }
  onEnded() {
    console.log("end");
    console.log(JSON.stringify(this.trucking));
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
          onEnded={this.onEnded.bind(this)}
          id="video"
          onPlaying={this.nowLoad.bind(this)}
          width="100%"
          src="http://localhost:3000/movies/IMG_9965.MOV"
          autoPlay
          muted
        />
        <Button onClick={this.onLoadEvent.bind(this)}>再生</Button>
        <Button onClick={this.onStopEvent.bind(this)}>停止</Button>
      </div>
    );
  }
}

export default Movie;
