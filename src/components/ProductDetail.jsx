import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const productData = products.find((p) => p.id === parseInt(id));
    setProduct(productData);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/3 object-cover" />
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg mt-4">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <h3 className="text-2xl mt-6">Reviews:</h3>
          <div className="mt-4">
            {/* Hardcoded example reviews, replace with actual review data */}
            <div className="border p-3 rounded mb-2">
              <p className="font-semibold">John Doe</p>
              <p>Great product, highly recommend!</p>
            </div>
            <div className="border p-3 rounded mb-2">
              <p className="font-semibold">Jane Smith</p>
              <p>Decent value for the price.</p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;