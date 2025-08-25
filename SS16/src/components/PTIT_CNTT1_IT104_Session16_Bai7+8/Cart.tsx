import React, { Component } from "react";
import CartItem from "./CartItem";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type Props = {
  items: Product[];
  onRemove: (id: number) => void;
};

export default class Cart extends Component<Props> {
  render() {
    const { items, onRemove } = this.props;
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
      <div className="cart">
        <h2>🛒 Giỏ hàng</h2>
        {items.length === 0 ? (
          <p>Chưa có sản phẩm nào trong giỏ hàng</p>
        ) : (
          items.map((item) => (
            <CartItem key={item.id} item={item} onRemove={onRemove} />
          ))
        )}
        <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
      </div>
    );
  }
}
