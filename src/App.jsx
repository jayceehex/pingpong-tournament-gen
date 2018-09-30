import React, { Component } from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import Add from './data/containers/Add';
import Home from './data/containers/Home';
import Match from './data/containers/Match';
import Header from './data/components/Header';
import FourOhFour from './data/components/FourOhFour';
import TournamentList from './data/components/TournamentList';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faInfoCircle)
library.add(faPlay)
library.add(faPlus)
library.add(faSyncAlt)


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/add" component={ Add } />
          <Route exact path="/play" component={ TournamentList } />
          <Route exact path="/matches/:id" render={ ({ match }) => (<Match id={ match.params.id }/> )} />
          <Route component={FourOhFour} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;