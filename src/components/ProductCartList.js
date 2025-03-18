import React, { useState, useEffect } from 'react';
import './ProductCartList.css';

function ProductCartList() {
  const products = [
    { "productId": 1, "categoryId": 1, "brandId": 1, "name": "iPhone 14 Pro", "price": 999, "image": "/images/products/iphone14pro.jpg", "rating": 4.8, "inStock": true, "description": "Latest Apple iPhone with advanced features.", "discount": 0, "warranty": "1 year" },
    { "productId": 2, "categoryId": 1, "brandId": 2, "name": "Galaxy S23 Ultra", "price": 1199, "image": "images/products/product-02.png", "rating": 4.7, "inStock": true, "description": "Samsung's flagship smartphone.", "discount": 50, "warranty": "1 year" },
    { "productId": 3, "categoryId": 3, "brandId": 3, "name": "Sony Bravia X90J", "price": 1499, "image": "/images/products/sonybravia.jpg", "rating": 4.6, "inStock": true, "description": "4K Ultra HD Smart LED TV with Dolby Vision.", "discount": 100, "warranty": "2 years" },
    { "productId": 4, "categoryId": 2, "brandId": 1, "name": "Apple Watch Series 8", "price": 499, "image": "/images/products/applewatch8.jpg", "rating": 4.9, "inStock": true, "description": "Advanced fitness tracker and smartwatch from Apple.", "discount": 0, "warranty": "1 year" },
    { "productId": 5, "categoryId": 1, "brandId": 2, "name": "Samsung Galaxy Buds 2", "price": 149, "image": "/images/products/galaxybuds2.jpg", "rating": 4.5, "inStock": true, "description": "Wireless earbuds with noise cancellation.", "discount": 20, "warranty": "1 year" },
    { "productId": 6, "categoryId": 4, "brandId": 4, "name": "Nike Air Zoom Pegasus", "price": 129, "image": "/images/products/nikeairzoom.jpg", "rating": 4.4, "inStock": true, "description": "Running shoes with responsive cushioning.", "discount": 0, "warranty": "30 days" },
    { "productId": 7, "categoryId": 4, "brandId": 5, "name": "Adidas Ultraboost", "price": 180, "image": "/images/products/adidasultraboost.jpg", "rating": 4.6, "inStock": true, "description": "Premium running shoes with energy return technology.", "discount": 15, "warranty": "30 days" },
    { "productId": 8, "categoryId": 3, "brandId": 6, "name": "LG French Door Refrigerator", "price": 2199, "image": "/images/products/lgrefrigerator.jpg", "rating": 4.8, "inStock": false, "description": "Smart refrigerator with InstaView Door-in-Door.", "discount": 200, "warranty": "5 years" },
    { "productId": 9, "categoryId": 5, "brandId": 3, "name": "Sony WH-1000XM5", "price": 399, "image": "/images/products/sonywh1000xm5.jpg", "rating": 4.9, "inStock": true, "description": "Premium noise cancelling headphones.", "discount": 50, "warranty": "2 years" },
    { "productId": 10, "categoryId": 5, "brandId": 1, "name": "Kera", "price": 36, "image": "/images/kera.jpg", "rating": 4.7, "inStock": true, "description": "1 vien keo bang 1 dia rau", "discount": 0, "warranty": "1 year" }
  ];
  
  const carts = [
    { "cartId": 1, "userId": 1, "productId": 2, "quantity": 1, "dateAdded": "2025-03-18T08:30:00" },
    { "cartId": 2, "userId": 2, "productId": 1, "quantity": 2, "dateAdded": "2025-03-17T14:45:00" },
    { "cartId": 3, "userId": 3, "productId": 3, "quantity": 1, "dateAdded": "2025-03-18T10:15:00" },
    { "cartId": 4, "userId": 1, "productId": 10, "quantity": 5, "dateAdded": "2025-03-16T16:20:00" },
    { "cartId": 5, "userId": 4, "productId": 6, "quantity": 2, "dateAdded": "2025-03-18T09:10:00" },
    { "cartId": 6, "userId": 5, "productId": 8, "quantity": 1, "dateAdded": "2025-03-17T11:30:00" },
    { "cartId": 7, "userId": 3, "productId": 9, "quantity": 1, "dateAdded": "2025-03-18T13:45:00" }
  ];

  // Filter cart items for userId = 1
  const [userCartItems, setUserCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Filter cart items for userId = 1
    const userItems = carts.filter(item => item.userId === 1);
    
    // Create full cart items with product details
    const fullCartItems = userItems.map(cartItem => {
      const product = products.find(p => p.productId === cartItem.productId);
      return {
        id: cartItem.cartId,
        productId: product.productId,
        name: product.name,
        price: product.price - (product.discount || 0),
        image: product.image,
        quantity: cartItem.quantity,
        dateAdded: cartItem.dateAdded,
        condition: "Ready to shipping now",
        shipping: 0, // Assuming free shipping
      };
    });

    setUserCartItems(fullCartItems);
    
    // Initialize quantities state
    const initialQuantities = {};
    fullCartItems.forEach(item => {
      initialQuantities[item.id] = item.quantity;
    });
    setQuantities(initialQuantities);
  }, []);

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: parseInt(value) });
    
    // Update the quantity in userCartItems
    setUserCartItems(userCartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(value) } : item
    ));
  };

  const calculateSubtotal = () => {
    return userCartItems.reduce((total, item) => 
      total + (item.price * quantities[item.id] || 0), 0);
  };

  const calculateShipping = () => {
    return userCartItems.reduce((total, item) => total + (item.shipping || 0), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleRemoveItem = (id) => {
    setUserCartItems(userCartItems.filter(item => item.id !== id));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="shopping-cart-container">
      <h1 className="shopping-cart-title">Your Cart</h1>
      
      <div className="info-banner">
        <span className="info-icon">ℹ️</span>
        <span>Cart have {userCartItems.length} product(s)</span>
      </div>
      
      <div className="cart-content">
        <div className="cart-items">
          {userCartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-condition">Status: {item.condition}</p>
                </div>
                <div className="item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <select 
                    id={`quantity-${item.id}`}
                    value={quantities[item.id]}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  >
                    {[...Array(10).keys()].map(num => (
                      <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="item-price-info">
                  <span className="item-price">${item.price.toFixed(2)}</span>
                  
                </div>
              </div>
              <div className="item-actions">
                <button className="action-button" onClick={() => handleRemoveItem(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <div className="summary-section">
            <h3>Summary</h3>
            <div className="summary-row">
              <span>Bill ({userCartItems.reduce((total, item) => total + quantities[item.id], 0)} product)</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
           
            <div className="summary-row subtotal">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          
          <button className="checkout-button">
            Pay
          </button>
          
          
        </div>
      </div>
    </div>
  );
}

export default ProductCartList;