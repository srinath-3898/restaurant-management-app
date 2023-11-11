"use client";
import styles from "./page.module.css";
import OrderForm from "@/components/OrderForm/OrderForm";
import Orders from "@/components/Orders/Orders";
import { useState } from "react";

export default function Home() {
  const [orders, setOrders] = useState([]);

  const addOrder = ({ order }) => {
    setOrders((prevState) => [order, ...prevState]);
  };
  const deleteOrder = (orderId) => {
    setOrders((prevState) =>
      prevState.filter((order) => order.orderId !== orderId)
    );
  };
  return (
    <div className={styles.home}>
      <OrderForm addOrder={addOrder} />
      <Orders table={1} orders={orders} deleteOrder={deleteOrder} />
      <Orders table={2} orders={orders} deleteOrder={deleteOrder} />
      <Orders table={3} orders={orders} deleteOrder={deleteOrder} />
    </div>
  );
}
