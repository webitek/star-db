import React, {Component} from 'react';
import './ErrorIndicator.css'
import icon from './death-star.png'

class ErrorIndicator extends Component {
  render() {
    return (
      <div className="error-indicator">
        <img src={icon} alt="Error icon"/>
        <span className="boom">Boom!</span>
        <span>
          something has gone terribly wrong
        </span>
        <span>
          (but we already sent droids to fix it)
        </span>
      </div>
    );
  }
}

export default ErrorIndicator;