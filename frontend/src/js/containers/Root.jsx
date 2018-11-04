import React from "react";
import { hot } from "react-hot-loader";
import Index from "~/pages/Index";
import Tutorial from "~/pages/Tutorial";
import { Switch, Route } from "react-router-dom";
import MouseMove from "~/components/organisms/MouseMove";

@hot(module)
class Root extends React.Component {
  render() {
    return (
      <div>
        <MouseMove />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/tutorial" component={Tutorial} />
        </Switch>
      </div>
    );
  }
}

export default Root;
