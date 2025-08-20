import React, { Component } from 'react';
import Children_Comp from './Children_Comp';

export default class Parent_Comp extends Component {
  state = {
    fullName: "Nguyễn Văn Nam"
  };

  render() {
    return (
      <div>
        <h2>
          Họ và tên bên component cha: <b>{this.state.fullName}</b>
        </h2>

        <Children_Comp fullName={this.state.fullName} />
      </div>
    );
  }
}
