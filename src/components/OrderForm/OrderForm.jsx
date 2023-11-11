"use client";
import React, { useState } from "react";
import styles from "./OrderForm.module.css";

const OrderForm = ({ addOrder }) => {
  const [orderFormData, setOrderFormData] = useState({
    orderId: "",
    dish: "",
    price: "",
    table: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const hadleAddOrder = (event) => {
    event.preventDefault();
    addOrder({ order: { ...orderFormData } });
  };

  return (
    <div className={styles.container}>
      <h1>Order Form</h1>
      <form className={styles.order_form} onSubmit={hadleAddOrder}>
        <div className={styles.input_controller}>
          <label htmlFor="orderId">Unique Order Id</label>
          <input
            type="number"
            id="orderId"
            name="orderId"
            value={orderFormData.id}
            placeholder="Please enter a unique order id"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.input_controller}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={orderFormData.price}
            placeholder="Please enter item price"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.input_controller}>
          <label htmlFor="dish">Dish</label>
          <input
            type="text"
            id="dish"
            name="dish"
            value={orderFormData.dish}
            placeholder="Please enter the dish name"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.input_controller}>
          <label htmlFor="table">Table</label>
          <select
            name="table"
            id="table"
            value={orderFormData.table}
            onChange={handleInputChange}
          >
            <option value={null}>Please Select a table</option>
            <option value={1}>Table 1</option>
            <option value={2}>Table 2</option>
            <option value={3}>Table 3</option>
          </select>
        </div>
        <div className={styles.actions}>
          <button type="submit">Add order</button>
        </div>
      </form>
    </div>
  );
};
export default OrderForm;
