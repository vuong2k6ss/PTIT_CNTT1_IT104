import { useDispatch } from "react-redux";
import { updateQty, removeItem } from "../features/cart/cartSlice";

export default function CartItem({ item, index }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>{item.price} USD</td>
      <td>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={e =>
            dispatch(updateQty({ id: item.id, quantity: parseInt(e.target.value) }))
          }
          className="form-control form-control-sm w-50"
        />
      </td>
      <td>
        <button className="btn btn-sm btn-primary me-2">Update</button>
        <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeItem(item.id))} > Delete</button>
      </td>
    </tr>
  );
}
