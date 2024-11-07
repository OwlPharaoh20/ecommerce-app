import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';

const Profile = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching order history
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      // Replace this with an API call to fetch orders for the user
      setOrders([
        { id: 1, total: 59.99, date: '2023-10-15' },
        { id: 2, total: 89.99, date: '2023-11-01' },
      ]);
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border p-4 rounded mb-4">
            <h3 className="font-semibold">Order #{order.id}</h3>
            <p>Total: ${order.total}</p>
            <p>Date: {order.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;
