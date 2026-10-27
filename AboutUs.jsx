import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>About Paradise Nursery</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto 15px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Welcome to Paradise Nursery, your premier online destination for high-quality houseplants! 
        Our mission is to bring nature closer to your everyday life by offering a wide variety of healthy, 
        beautiful indoor plants that refresh your living spaces and elevate your well-being.
      </p>
      <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Whether you are looking for air-purifying foliage, aromatic herbs, or easy-care succulents, 
        our expert team ensures every plant is nurtured with care and delivered safely to your home.
      </p>
    </div>
  );
};

export default AboutUs;
