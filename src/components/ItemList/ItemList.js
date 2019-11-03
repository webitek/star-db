import React, {Component} from 'react';
import './ItemList.css'

class ItemList extends Component {
  render() {
    return (
      <div>
        <ul className="item-list list-group">
          <li className="list-group-item">
            Luke
          </li>
        </ul>
      </div>
    );
  }
}

export default ItemList;