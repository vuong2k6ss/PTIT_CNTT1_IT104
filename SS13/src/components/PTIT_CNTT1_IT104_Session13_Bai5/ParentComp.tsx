import React, { Component } from 'react';
import ChildrenComp from './ChildrenComp';

export default class ParentComp extends Component {
  state = {
    product: {
      id: 1,
      name: "Bưởi ba roi",
      price: 12000,
      quantity: 6
    }
  }

  render() {
    return (
      <div>
        <ChildrenComp product={this.state.product} />
      </div>
    )
  }
}
