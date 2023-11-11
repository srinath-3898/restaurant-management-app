import React from "react";
import styles from "./Order.module.css";

const Order = ({ orderId, price, dish, deleteOrder }) => {
  const handleDeleteOrder = () => {
    deleteOrder(orderId);
  };
  return (
    <div className={styles.order}>
      <p>{orderId}</p>
      <p>{price}</p>
      <p>{dish}</p>
      <button onClick={handleDeleteOrder}>Delete</button>
    </div>
  );
};

export default Order;
