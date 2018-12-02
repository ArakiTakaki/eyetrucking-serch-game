import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "~/store/actions";
import Movie from "~/components/organisms/movie/Movie";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
const mapStateToProps = state => ({ store: state });
@hot(module)
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Movie />;
  }
}

export default Index;
