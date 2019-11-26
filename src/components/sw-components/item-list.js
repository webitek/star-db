import React from 'react'
import ItemList from '../ItemList';
import {withData, withSwapiService} from '../hoc-helper';


const withChildFunction = (Wrapped, fn) => {
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

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, RenderName)),
  mapPersonMethodToProps)

const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, RenderName)),
  mapPlanetMethodToProps)

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, RenderModelAndName)),
  mapStarShipMethodToProps)

export {
  PersonList,
  PlanetList,
  StarshipList,
}