import React, {Component} from 'react';
import './ErrorIndicator.css'
import icon from './death-star.png'

class ErrorIndicator extends Component {
  render() {
    return (
      <div className="error-indicator">
        <img className="error-indicator__icon" src={icon} alt="Error icon"/>
        <p className="boom">Boom!</p>
        <p>
          <span>
            something has gone terribly wrong
          </span>
            <span>
            (but we already sent droids to fix it)
          </span>
        </p>
      </div>
    );
  }
}

export default ErrorIndicator;