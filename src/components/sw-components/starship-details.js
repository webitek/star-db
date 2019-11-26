import React from 'react'
import ItemDetails, {Record} from '../item-details';
import { withSwapiService } from '../hoc-helper'

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model"/>
      <Record field="length" label="Length"/>
      <Record field="costInCredits" label="Cost"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiSevice) => {
  return {
    getData: swapiSevice.getStarship,
    getImageUrl: swapiSevice.getStarShipImage,
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps)