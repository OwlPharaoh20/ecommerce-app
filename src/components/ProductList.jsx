import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Filtering products based on search term and selected category
  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || product.category === categoryFilter)
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        {/* Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="border p-2 rounded mr-4 w-full md:w-1/3"
        />

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded w-full md:w-1/4"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {filteredProducts.map((product) => (
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
    </div>
  );
};

export default ProductList;