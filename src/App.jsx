import React, { Component } from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import Add from './data/containers/Add';
import Home from './data/containers/Home';
import TournamentList from './data/components/TournamentList';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft)
library.add(faChevronRight)

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/add" component={ Add } />
        <Route exact path="/play" component={ TournamentList } />
      </Switch>
    );
  }
}

export default App;