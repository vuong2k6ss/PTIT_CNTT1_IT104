import React, { Component } from 'react'

export default class Exercises01 extends Component {
  state = {fullName: "Nguyễn Minh Sơn"};
  render() {
    return (
      <div>
        <h2>
          Họ và tên: <b>{this.state.fullName}</b>
        </h2>
      </div>
    )
  }
}
