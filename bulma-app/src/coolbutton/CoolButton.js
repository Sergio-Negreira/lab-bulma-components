import React, { Component } from 'react'
import '../../node_modules/bulma/css/bulma.css'

export default class CoolButton extends Component {
    render () {
        return (
            <div>
            <button className={this.props.classes}>{this.props.value}</button>
          </div>
        )

}}