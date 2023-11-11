import React from "react";
import styles from "./Orders.module.css";
import Order from "./Order/Order";

const Orders = ({ table, orders, deleteOrder }) => {
  return (
    <div className={styles.container}>
      <h1>Table {table}</h1>
      {orders.map((order) =>
        parseInt(order.table) === table ? (
          <Order
            key={order.orderId}
            orderId={order.orderId}
            dish={order.dish}
            price={order.price}
            deleteOrder={deleteOrder}
          />
        ) : null
      )}
    </div>
  );
};

export default Orders;
