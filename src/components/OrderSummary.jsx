import React from 'react';
import { useCart } from '../context/CartContext';

const OrderSummary = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-3 rounded mb-2">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <h3 className="text-xl mt-4">Total: ${total.toFixed(2)}</h3>
          <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
