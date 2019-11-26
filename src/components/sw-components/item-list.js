import React from 'react'
import ItemList from '../ItemList';
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from '../hoc-helper';

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

/*const PersonList = withSwapiService(mapPersonMethodToProps)(
  withData(
    withChildFunction(RenderName)(
      ItemList
    )
  )
)*/
const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildFunction(RenderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildFunction(RenderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarShipMethodToProps),
  withData,
  withChildFunction(RenderModelAndName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
}