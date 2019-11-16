import React, {Component} from 'react';
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from "../ErrorButton";
import ErrorIndicator from "../ErrorIndicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-sevices";

export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    }
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <ErrorButton />

        <PeoplePage />

        {/*<div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPlanetSelected}
                      getData={this.swapiService.getAllPlanets}
                      renderItem={({name, gender, birthYear}) => `${name} ${gender} ${birthYear}`}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onStarshipSelected}
                      getData={this.swapiService.getAllStarships}
                      renderItem={({name}) => (<span>${name} <button>!</button></span>)}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>*/}

      </div>
    );
  }
}

