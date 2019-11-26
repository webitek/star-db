import React from 'react'
import ItemList from '../ItemList';
import {withData, withSwapiService} from '../hoc-helper';


const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const RenderName = ({name}) => <span>{name}</span>;
const RenderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}
const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapStarShipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = withSwapiService(mapPersonMethodToProps)(
  withData(
    withChildFunction(RenderName)(
      ItemList
    )
  )
)
const PlanetList = withSwapiService(mapPlanetMethodToProps)(
  withData(
    withChildFunction(RenderName)(
      ItemList
    )
  )
)
const StarshipList = withSwapiService(mapStarShipMethodToProps)(
  withData(
    withChildFunction(RenderModelAndName)(
      ItemList
    )
  )
)
export {
  PersonList,
  PlanetList,
  StarshipList,
}