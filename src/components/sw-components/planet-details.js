import React from 'react'
import ItemDetails, {Record} from '../item-details';

import { withSwapiService } from '../hoc-helper'


const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiSevice) => {
  return {
    getData: swapiSevice.getPlanet,
    getImageUrl: swapiSevice.getPlanetImage,
  }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);