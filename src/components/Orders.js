import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userName = "Kalyan"; // Replace with dynamic name from context/auth if needed

  useEffect(() => {
    axios
      .get("http://localhost:8080/allOrders", { params: { name: userName } })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders-card">
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders today.</p>
          <Link to="/" className="btn btn-blue">
            Get Started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
