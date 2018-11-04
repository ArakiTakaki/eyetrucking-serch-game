import React from "react";
import { hot } from "react-hot-loader";
import Index from "~/pages/Index";
import { Switch, Route } from "react-router-dom";

@hot(module)
class Root extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    );
  }
}

export default Root;
