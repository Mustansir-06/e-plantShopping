import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const costNum = parseFloat(item.cost.replace('$', ''));
      return total + costNum * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    const costNum = parseFloat(item.cost.replace('$', ''));
    return (costNum * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Functionality Coming Soon');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Shopping Cart</h2>
      <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }} />
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <h4>{item.name}</h4>
              <p>Unit Price: {item.cost}</p>
              <p>Subtotal: ${calculateTotalCost(item)}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => handleDecrement(item)} style={{ padding: '5px 12px' }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)} style={{ padding: '5px 12px' }}>+</button>
              <button onClick={() => handleRemove(item)} style={{ padding: '5px 10px', backgroundColor: '#e53935', color: 'white', border: 'none', borderRadius: '4px' }}>Delete</button>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
        <button onClick={onContinueShopping} style={{ padding: '10px 20px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Continue Shopping
        </button>
        <button onClick={handleCheckoutShopping} style={{ padding: '10px 20px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
