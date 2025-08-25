import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import "./home.css";

const products = [
  { id: 1, name: 'Samsung Galaxy S21', price: 22000000, image: 'samsung.jpg' },
  { id: 2, name: 'iPhone 14 Pro Max', price: 29000000, image: 'iphone14.jpg' },
  { id: 3, name: 'Oppo A9', price: 20000000, image: 'oppoA9.jpg' },
  { id: 4, name: 'iPhone 11 Pro Max', price: 21000000, image: 'iphone11.jpg' },
  { id: 5, name: 'Samsung Galaxy Note', price: 22500000, image: 'note.jpg' },
  { id: 6, name: 'Oppo V5', price: 23500000, image: 'oppoV5.jpg' },
  { id: 5, name: 'Samsung Galaxy Note', price: 22500000, image: 'note.jpg' },
  { id: 6, name: 'Oppo V5', price: 23500000, image: 'oppoV5.jpg' },
];

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type State = {
  cart: (Product & { quantity: number })[];
  showCart: boolean;
};

export default class Home extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      cart: [],
      showCart: false
    };
  }

  handleAddToCart = (id: number) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    this.setState(prevState => {
      const existing = prevState.cart.find(item => item.id === id);
      if (existing) {
        return {
          cart: prevState.cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return {
          cart: [...prevState.cart, { ...product, quantity: 1 }]
        };
      }
    });
  };

  handleRemoveFromCart = (id: number) => {
    this.setState(prevState => ({
      cart: prevState.cart.filter(item => item.id !== id)
    }));
  };

  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  render() {
    return (
      <div className="page">
        {/* Navbar */}
        <nav className="navbar">
          <span className="logo">Trang chủ</span>
          <span className="menu">Danh sách sản phẩm</span>
          <div className="cart-icon" onClick={this.toggleCart}>
            🛒
            {this.state.cart.length > 0 && (
              <span className="badge">{this.state.cart.length}</span>
            )}
          </div>
        </nav>

        {/* Product list */}
        <ProductList products={products} onAddToCart={this.handleAddToCart} />

        {/* Cart popup */}
        {this.state.showCart && (
          <Cart items={this.state.cart} onRemove={this.handleRemoveFromCart} />
        )}
      </div>
    );
  }
}
