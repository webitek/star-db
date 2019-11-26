import React, {Component} from 'react';
import Header from '../Header'
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/swapi-sevices";
import {SwapiSeviceProvider} from "../swapi-service-context";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../ErrorButton";
import { PeoplePage, PlanetsPage, StarshipPage } from "../pages";

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

          <Header/>

          <RandomPlanet updateInterval={10000}/>

          <ErrorButton/>

          <PeoplePage/>
          <PlanetsPage/>
          <StarshipPage/>


        </SwapiSeviceProvider>
      </div>
    );
  }
}

