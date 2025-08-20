import React, { Component } from 'react';

type Props = {
  fullName: string;
};

export default class Children_Comp extends Component<Props> {
  render() {
    return (
      <h2>
        Họ và tên bên component con: <b>{this.props.fullName}</b>
      </h2>
    );
  }
}
