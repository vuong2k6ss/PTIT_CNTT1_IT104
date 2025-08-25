import React, { Component } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type Props = {
  item: Product;
  onRemove: (id: number) => void;
};

export default class CartItem extends Component<Props> {
  render() {
    const { item, onRemove } = this.props;
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} className="cart-img" />
        <span>{item.name}</span>
        <span> x {item.quantity}</span>
        <span> = {(item.price * item.quantity).toLocaleString()} đ</span>
        <button onClick={() => onRemove(item.id)}>🗑 Xóa</button>
      </div>
    );
  }
}
