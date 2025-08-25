import React, { Component } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  products: Product[];
  onAddToCart: (id: number) => void;
};

export default class ProductList extends Component<Props> {
  render() {
    const { products, onAddToCart } = this.props;
    return (
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    );
  }
}
