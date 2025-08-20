import React, { Component } from 'react'

export default class Exercise02 extends Component {
  state = {
    id: 1,
    name: "Nguyễn Văn Sơn",
    dob: "20/12/2023",
    address: "Thanh Xuân, Hà Nội"
  }

  render() {
    return (
      <div style={{ margin: "20px"}}>
        <h2>Thông tin cá nhân</h2>
        <p><b>id:</b> {this.state.id}</p>
        <p><b>Tên:</b> {this.state.name}</p>
        <p><b>Ngày sinh:</b> {this.state.dob}</p>
        <p><b>Địa chỉ:</b> {this.state.address}</p>
      </div>
    )
  }
}
