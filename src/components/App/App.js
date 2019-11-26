import React, {Component} from 'react';
import Header from '../Header'
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/swapi-sevices";
import {SwapiSeviceProvider} from "../swapi-service-context";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../ErrorButton";
import {PeoplePage, PlanetsPage, StarshipPage} from "../pages";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { StarshipDetails} from "../sw-components";

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService()
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    return (
      <div className="container">
        <SwapiSeviceProvider value={this.state.swapiService}>
          <Router>

            <Header/>

            <div>
              <RandomPlanet updateInterval={100000}/>

              <ErrorButton/>
            </div>

            <Route path="/"
                   render={() => <h2>Welcome to StarDB</h2>}
                   exact></Route>
            <Route path="/people"
                   exact
                   render={() => <h2>People</h2>}></Route>
            <Route path="/people/:id?" component={PeoplePage}></Route>
            <Route path="/planets" component={PlanetsPage}></Route>
            <Route path="/starships" exact component={StarshipPage}></Route>
            <Route path="/starships/:id"
                   render={({match, location, history}) => {
                     const {id} = match.params
                     return <StarshipDetails itemId={id}/>
                   }}></Route>

          </Router>
        </SwapiSeviceProvider>
      </div>
    );
  }
}

