import React from "react";
import styles from "scss/test.scss";
import PropTypes from "prop-types";

const MoviePlayer = props => {
  const { onEnded, onPlaying, onTimeUpdate, src } = props;
  return (
    <video
      className={styles.movie}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      id="video"
      onPlaying={onPlaying}
      width="1130"
      height="630"
      src={src}
      autoPlay
      muted
    />
  );
};

MoviePlayer.propTypes = {
  onEnded: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPlaying: PropTypes.func,
  src: PropTypes.string.isRequired
};

export default MoviePlayer;
