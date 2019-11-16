import React from 'react';
import './ItemList.css'
import SwapiService from "../../services/swapi-sevices";
import {withData} from '../hoc-helper'

const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props

  const items = data.map((item) => {
    const {id} = item
    const label = renderLabel(item)
    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  })

  return (
    <div>
      <ul className="item-list list-group">
        {items}
      </ul>
    </div>
  );
}

const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople)