import React, {Component} from 'react';
import ItemList from "../ItemList";
import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/swapi-sevices";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class PeoplePage extends Component {

  swapiService = new SwapiService()



  state = {
    selectedPerson: 3,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {

    const {
      getAllPeople,
      getPerson,
      getPersonImage
    } = this.swapiService

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
                getData={getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>
    )

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson}
                     getData={getPerson}
                     getImageUrl={getPersonImage}>
          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
      </ErrorBoundry>
    )

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }
}

