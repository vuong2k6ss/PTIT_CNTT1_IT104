import React, { Component } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
  onAddToCart: (id: number) => void;
};

export default class ProductCard extends Component<Props> {
  render() {
    const { product, onAddToCart } = this.props;
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-img" />
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()} đ</p>
        <button onClick={() => onAddToCart(product.id)}>
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}
