import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const ProductList = () => {
  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="mt-2 font-bold">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
          <Link to={`/products/${product.id}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
