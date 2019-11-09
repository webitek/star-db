import React, {Component} from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-sevices'
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
    // id: null,
    // name: null,
    // population: null,
    // rotationPeriod: null,
    // diameter: null,
  }

  /*constructor() {
    super()
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 2500)
    // clearInterval(this.interval)
  }*/
  componentDidMount() {
    this.updatePlanet()
    // this.interval = setInterval(this.updatePlanet, 2500)
    // clearInterval(this.interval)
  }

  onError = (err) => {
    this.setState({error: true, loading: false})
  };

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null

    return (
      <div>
        <div className="random-planet jumbotron rounded">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </div>
    );
  }
}


const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="planet-image"/>
      <div>
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Populations</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}