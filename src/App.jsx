import React, { Component } from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import Add from './data/containers/Add';

class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={  } /> */}
        <Route exact path="/add" component={ Add } />
      </Switch>
    );
  }
}

export default App;
