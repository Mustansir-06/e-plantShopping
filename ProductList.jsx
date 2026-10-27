import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night.', cost: '$15' },
      { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene.', cost: '$12' },
      { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg', description: 'Removes mold spores from air.', cost: '$18' },
      { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Restores essential indoor moisture.', cost: '$14' },
      { name: 'Rubber Tree', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/plant-4850669_1280.jpg', description: 'Easy-care air purifier.', cost: '$20' },
      { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/18/10/aloe-vera-3284620_1280.jpg', description: 'Purifies air and soothes skin.', cost: '$10' },
    ],
  },
  {
    category: 'Aromatic & Fragrant Plants',
    plants: [
      { name: 'Lavender', image: 'https://cdn.pixabay.com/photo/2017/07/18/18/24/lavender-2516623_1280.jpg', description: 'Calming and relaxing aroma.', cost: '$22' },
      { name: 'Jasmine', image: 'https://cdn.pixabay.com/photo/2018/05/20/14/06/flower-3415843_1280.jpg', description: 'Sweet-smelling white flowers.', cost: '$25' },
      { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/03/rosemary-4541241_1280.jpg', description: 'Fragrant herb used in cooking.', cost: '$12' },
      { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2016/01/26/18/16/mint-1163013_1280.jpg', description: 'Fresh culinary scent.', cost: '$8' },
      { name: 'Eucalyptus', image: 'https://cdn.pixabay.com/photo/2017/03/17/10/29/eucalyptus-2151229_1280.jpg', description: 'Refreshing menthol fragrance.', cost: '$19' },
      { name: 'Gardenia', image: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/flower-2324905_1280.jpg', description: 'Rich, intoxicating floral scent.', cost: '$24' },
    ],
  },
  {
    category: 'Low Maintenance Succulents',
    plants: [
      { name: 'Echeveria', image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/succulent-1846152_1280.jpg', description: 'Beautiful rosette succulent.', cost: '$11' },
      { name: 'Jade Plant', image: 'https://cdn.pixabay.com/photo/2021/01/14/19/57/succulent-5917786_1280.jpg', description: 'Symbol of good luck and wealth.', cost: '$15' },
      { name: 'Zebra Haworthia', image: 'https://cdn.pixabay.com/photo/2020/07/08/04/19/succulents-5382502_1280.jpg', description: 'Striking white striped pattern.', cost: '$9' },
      { name: 'Burro Tail', image: 'https://cdn.pixabay.com/photo/2019/08/20/12/36/plant-4418683_1280.jpg', description: 'Trailing succulent stems.', cost: '$13' },
      { name: 'Pinchushion Cactus', image: 'https://cdn.pixabay.com/photo/2016/08/10/14/29/cactus-1583526_1280.jpg', description: 'Compact and low water needs.', cost: '$10' },
      { name: 'String of Pearls', image: 'https://cdn.pixabay.com/photo/2020/04/16/16/10/succulent-5051280_1280.jpg', description: 'Unique bead-like foliage.', cost: '$16' },
    ],
  },
];

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Paradise Nursery</div>
        <div>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(false); }}>Plants</a>
          <a href="#" className="cart-icon" onClick={(e) => { e.preventDefault(); setShowCart(true); }}>
            🛒 Cart <span className="cart-badge">{totalCartCount}</span>
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div style={{ padding: '20px' }}>
          {plantsArray.map((categoryObj, idx) => (
            <div key={idx} style={{ marginBottom: '40px' }}>
              <h2 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '10px' }}>{categoryObj.category}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {categoryObj.plants.map((plant, pIdx) => (
                  <div key={pIdx} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', textAlign: 'center' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{plant.cost}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedNodes[plant.name] || cartItems.some((item) => item.name === plant.name)}
                      style={{
                        padding: '10px 15px',
                        backgroundColor: (addedNodes[plant.name] || cartItems.some((item) => item.name === plant.name)) ? '#cccccc' : '#2e7d32',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: (addedNodes[plant.name] || cartItems.some((item) => item.name === plant.name)) ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {(addedNodes[plant.name] || cartItems.some((item) => item.name === plant.name)) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
