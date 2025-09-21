import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="card">
      <div className="card-header bg-danger text-white">Your Cart</div>
      <div className="card-body">
        {items.length === 0 ? (
          <p>No items in your shopping cart.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <CartItem key={item.id} item={item} index={idx + 1} />
              ))}
            </tbody>
          </table>
        )}
        <h5 className="text-end text-danger fw-bold">{total} USD</h5>
      </div>
    </div>
  );
}
