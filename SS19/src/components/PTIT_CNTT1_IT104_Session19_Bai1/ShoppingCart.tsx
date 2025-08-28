import { useMemo } from "react";

const cartItems = [
  { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
  { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
];

export default function ShoppingCart() {
  const totalPrice = useMemo(() => {
    console.log("Đang tính tổng...");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, []);

  return (
    <div>
      <h2> Giỏ hàng</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Giá: {item.price.toLocaleString()} VNĐ ×{" "}
            {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Tổng cộng: {totalPrice.toLocaleString()} VNĐ</h3>
    </div>
  );
}