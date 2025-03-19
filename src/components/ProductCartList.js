import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCartList.css';
import { UserContext } from '../context/UserContext';

function ProductCartList() {
  const { user, cart, removeFromCart, updateCartQuantity, checkout } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("Please login to view your cart");
      navigate("/login");
    }
  }, [user, navigate]);

  const handleQuantityChange = (id, value) => {
    updateCartQuantity(id, parseInt(value));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = item.product.price - (item.product.discount || 0);
      return total + (price * item.quantity);
    }, 0);
  };

  const calculateShipping = () => {
    return cart.length > 0 ? 15 : 0; 
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setLoading(true);
    try {
      const orderId = await checkout(user.address, "Credit Card");
      
      if (orderId) {
        alert(`Order placed successfully! Order ID: ${orderId}`);
        navigate(`/order/${orderId}`); 
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout.");
    } finally {
      setLoading(false);
    }
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
        <span>Cart has {cart.length} product(s)</span>
      </div>
      
      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <div className="item-image">
                  <img src={item.product.image} alt={item.product.name} />
                </div>
                <div className="item-info">
                  <h3 className="item-name">{item.product.name}</h3>
                  <p className="item-condition">Status: {item.product.inStock ? "In Stock" : "Out of Stock"}</p>
                </div>
                <div className="item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <select 
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  >
                    {[...Array(10).keys()].map(num => (
                      <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="item-price-info">
                  <span className="item-price">
                    ${(item.product.price - (item.product.discount || 0)).toFixed(2)}
                  </span>
                  {item.product.discount > 0 && (
                    <span className="item-discount">Save ${item.product.discount}</span>
                  )}
                </div>
              </div>
              <div className="item-actions">
                <button className="action-button" onClick={() => handleRemoveItem(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}

          {cart.length === 0 && (
            <div className="empty-cart-message">
              Your cart is empty. Please add some products.
            </div>
          )}
        </div>
        
        <div className="cart-summary">
          <div className="summary-section">
            <h3>Summary</h3>
            <div className="summary-row">
              <span>Bill ({cart.reduce((total, item) => total + item.quantity, 0)} products)</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${calculateShipping().toFixed(2)}</span>
            </div>
            <div className="summary-row subtotal">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            className="checkout-button"
            onClick={handleCheckout}
            disabled={loading || cart.length === 0}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCartList;