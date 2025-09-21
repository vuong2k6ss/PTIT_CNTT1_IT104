import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function ProductItem({ product }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="d-flex mb-3 border-bottom pb-2">
      <img src={product.img} alt={product.name} className="me-3 rounded" />
      <div className="flex-grow-1">
        <h5>{product.name}</h5>
        <p className="small text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="d-flex align-items-center">
          <span className="badge bg-warning text-dark me-3">
            {product.price} USD
          </span>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={e => setQty(parseInt(e.target.value))}
            className="form-control w-25 me-2"
          />
          <button
            className="btn btn-success btn-sm"
            onClick={() =>
              dispatch(addItem({ ...product, quantity: qty }))
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
