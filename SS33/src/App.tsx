import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const products = [
    { id: 1, name: "Pizza", price: 30, img: "https://picsum.photos/80?pizza" },
    { id: 2, name: "Hamburger", price: 15, img: "https://picsum.photos/80?burger" },
    { id: 3, name: "Bread", price: 20, img: "https://picsum.photos/80?bread" },
    { id: 4, name: "Cake", price: 10, img: "https://picsum.photos/80?cake" },
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-md-6">
          <ProductList products={products} />
        </div>
        <div className="col-md-6">
          <Cart />
        </div>
      </div>
    </div>
  );
}
