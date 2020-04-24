import React, { Component } from 'react'
import '../../node_modules/bulma/css/bulma.css'

class CoolButton extends Component {
  render() {
      return (
          <div>
              <button className={this.props.styles} >{this.props.text}</button>
          </div>
      );
  }
}

export default CoolButton;