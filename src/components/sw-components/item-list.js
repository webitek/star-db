import React from 'react'
import ItemList from '../ItemList';
import {withData} from '../hoc-helper';
import SwapiService from '../../services/swapi-sevices';

const swapiService = new SwapiService()

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets,
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const RenderName = ({ name }) => <span>{name}</span>;
const RenderModelAndName= ({ model, name }) => <span>{name} ({model})</span>;

const PersonList = withData(
                      withChildFunction(ItemList, RenderName),
                      getAllPeople)

const PlanetList = withData(
                      withChildFunction(ItemList, RenderName),
                      getAllPlanets)

const StarshipList = withData(
                      withChildFunction(ItemList, RenderModelAndName),
                      getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList,
}