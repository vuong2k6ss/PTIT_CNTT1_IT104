import React, { Component } from 'react';
import './ButtonGroup.css';

export default class ButtonGroup extends Component {
  render() {
    return (
      <div className="button-group">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-danger">Danger</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-light">Light</button>
        <button className="btn btn-dark">Dark</button>
        <a className="btn btn-link" href="#">Link</a>
      </div>
    );
  }
}
