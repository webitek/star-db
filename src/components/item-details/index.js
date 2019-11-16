import React, {Component} from 'react';
import './PersonDetails.css';
import Spinner from "../Spinner";
import ErrorButton from "../ErrorButton";

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}
export {Record};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
    loading: true,
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({loading: true})
      this.updateItem()
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      })
  }

  render() {
    const {item, image} = this.state
    if (!item) {
      return <span>Select a item from a list</span>
    }

    const {name} = this.state.item
    const {loading} = this.state

    if (loading) {
      return <Spinner/>
    }

    return (
      <div className="item-details card">
        <img src={image} alt="" className="item-image"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child, {item})
              })
            }
            {/*<li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>*/}
          </ul>
          <ErrorButton/>
        </div>
      </div>
    );
  }
}

