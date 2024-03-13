import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productID}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productID]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <>
      <h1>Product Details</h1>
      {product ? (
        <>
          <h1>Product Name: {product.title}</h1>
          {/* Display more product details */}
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <label>
            Quantity:
            <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
          </label>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <>
          <p>No product found</p>
          <button onClick={() => navigate('/')}>Go to Home Page</button>
        </>
      )}
    </>
  );
};

export default ProductDetails;
