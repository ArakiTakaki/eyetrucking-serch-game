import React from "react";
import { hot } from "react-hot-loader";
// import { Typography, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import Movie from "./movie/Movie";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const mapStateToProps = state => ({ store: state });

@hot(module)
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Movie />
        <h1>body</h1>
      </div>
    );
  }
}

export default Body;
