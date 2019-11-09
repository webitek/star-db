import React, {Component} from 'react';
import './ItemList.css'
import SwapiService from "../../services/swapi-sevices";
import Spinner from "../Spinner";

class ItemList extends Component {

  swapiService = new SwapiService()

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      })
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      )
    })
  }

  render() {

    const {peoppleList} = this.state

    if (!peoppleList) {
      return <Spinner/>
    }

    const items = this.renderItems(peoppleList)

    return (
      <div>
        <ul className="item-list list-group">
          {items}
        </ul>
      </div>
    );
  }
}

export default ItemList;