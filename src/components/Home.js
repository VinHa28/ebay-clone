import React from 'react';
import './Home.css';

function Home() {
  // Category data as constants
  const categories = [
    {
      id: 1,
      name: "Luxury",
      imageClass: "luxury",
      imageUrl: "/images/phamthoai.jpg",
      link: "/category/luxury"
    },
    {
      id: 2,
      name: "Sneakers",
      imageClass: "sneakers",
      imageUrl: "/images/tiendop.jpg",
      link: "/category/sneakers"
    },
    {
      id: 3,
      name: "PSA",
      imageClass: "psa",
      imageUrl: "/images/kera.jpg",
      link: "/category/psa"
    },
    {
      id: 4,
      name: "Refurbished",
      imageClass: "refurbished",
      imageUrl: "/images/thandop.jpg",
      link: "/category/refurbished"
    },
    {
      id: 5,
      name: "Trading cards",
      imageClass: "trading-cards",
      imageUrl: "/images/phamthoai.jpg",
      link: "/category/trading-cards"
    },
    {
      id: 6,
      name: "Pre-loved Luxury",
      imageClass: "pre-loved",
      imageUrl: "/images/kera.jpg",
      link: "/category/pre-loved-luxury"
    },
    {
      id: 7,
      name: "Toys",
      imageClass: "toys",
      imageUrl: "/images/thandop.jpg",
      link: "/category/toys"
    }
  ];

  return (
    <div className="home">
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Returns made simple</h1>
          <p>Not happy with your purchase? It's easy to start a return.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="slider-controls">
          <button className="slider-prev">&#10094;</button>
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="slider-next">&#10095;</button>
          <button className="slider-play">&#9658;</button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Explore Popular Categories</h2>
        <div className="category-grid">
          {categories.map(category => (
            <a 
              key={category.id} 
              href={category.link}
              className="category-item"
              aria-label={`Browse ${category.name} products`}
            >
              <div 
                className={`category-image ${category.imageClass}`} 
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              />
              <p>{category.name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Shopping Made Easy Section */}
      <div className="shopping-easy-section">
        <div className="shopping-content">
          <h2>Shopping made easy</h2>
          <button className="start-now-btn">Start now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;