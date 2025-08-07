"use strict";
;
;
const calculateOrderTotal = (order) => {
    let { items } = order;
    let total = 0;
    items.forEach(item => {
        total += (item.product.price * item.quantity);
    });
    return total;
};
const printOrder = (order) => {
    console.log("Đơn hàng: ", order.orderId);
    console.log("Khách hàng: ", order.customerName);
    console.log("Sản phẩm: ");
    order.items.forEach(item => {
        console.log(`- ${item.product.name} x ${item.quantity} = ${(item.product.price * item.quantity).toLocaleString()}`);
    });
    console.log(`Tổng cộng: ${calculateOrderTotal(order).toLocaleString()}`);
    if (order.note !== undefined) {
        console.log(`Ghi chú: ${order.note}`);
    }
};
const orders = [
    {
        orderId: "ORD001",
        customerName: "Nguyễn Văn A",
        items: [
            {
                product: {
                    productId: "SP001",
                    name: "Áo chống nắng",
                    price: 125000,
                },
                quantity: 12,
            },
            {
                product: {
                    productId: "SP002",
                    name: "Áo mưa",
                    price: 120000,
                },
                quantity: 2,
            },
            {
                product: {
                    productId: "SP003",
                    name: "Bánh mì",
                    price: 12000,
                },
                quantity: 10,
            },
        ],
        note: "Giao trước 18h"
    },
    {
        orderId: "ORD002",
        customerName: "Nguyễn Văn A",
        items: [
            {
                product: {
                    productId: "SP008",
                    name: "Áo mưa",
                    price: 120000,
                },
                quantity: 5,
            },
            {
                product: {
                    productId: "SP009",
                    name: "Bánh bao",
                    price: 5000,
                },
                quantity: 10,
            },
        ],
        note: "Giao nhanh lẹ"
    }
];
orders.forEach(order => {
    printOrder(order);
});
