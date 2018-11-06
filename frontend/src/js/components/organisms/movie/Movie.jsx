import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import styles from "scss/test.scss";
import { Grid } from "@material-ui/core";
import MoveLinkEvent from "~/components/organisms/MoveLinkEvent";
import MovieAction from "~/components/organisms/MovieAction";

const MOCK_EVENTS = [
  {
    name: "TestEvent",
    x: 400,
    y: 300,
    time: 10, // 秒で指定する。
    event: {
      a: {
        description: "1. ここがおかしい",
        point: 10
      },
      b: {
        description: "2. ここがへん",
        point: 5
      },
      c: {
        description: "3. おかしくない？",
        point: 2
      },
      d: {
        description: "4. わからない",
        point: 0
      }
    }
  }
];

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
    console.log("TO START");
    this.video.play();
  }
  onStopEvent() {
    console.log("TO STOP");
    this.video.pause();
  }
  onVideoStop() {
    this.props.actions.contentVideoStop();
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

  onPlaying(event) {
    console.log(event);
    this.props.actions.contentVideoStart();
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={9}>
          <video
            className={styles.movie}
            onTimeUpdate={this.onTimeUpdate.bind(this)}
            onEnded={this.onEnded.bind(this)}
            id="video"
            onPlaying={this.onPlaying.bind(this)}
            width="1130"
            height="630"
            src={`http://${location.hostname}:3000/movies/IMG_9965.MOV`}
            autoPlay
            muted
          />
        </Grid>
        <Grid item xs={6}>
          <MoveLinkEvent id="videoStop" func={this.onStopEvent.bind(this)}>
            Stop
          </MoveLinkEvent>
        </Grid>
        <Grid item xs={6}>
          <MoveLinkEvent id="videoStart" func={this.onLoadEvent.bind(this)}>
            Start
          </MoveLinkEvent>
        </Grid>
        <MovieAction
          id="movieEvent01"
          func={() => {
            console.log("test");
          }}
          top={120}
          left={200}
        />
      </Grid>
    );
  }
}

// イベントの雛形
// <MovieAction id="movieEvent01" func={() => { console.log("test"); }} top={120} left={200}/>
export default Movie;
