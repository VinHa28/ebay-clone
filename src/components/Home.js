import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        axios.get("http://localhost:3000/Category") 
            .then(response => setCategories(response.data))
            .catch(error => console.error("Error fetching categories:", error));

        axios.get("http://localhost:3000/Product")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

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
                            key={category.categoryId} // Sử dụng categoryId
                            href={category.link}
                            className="category-item"
                            aria-label={`Browse ${category.name} products`}
                        >
                            <div
                                className={`category-image ${category.imageClass}`}
                                style={{ backgroundImage: `url(${category.image})` }} // Sử dụng category.image
                            />
                            <p>{category.name}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Shopping Made Easy Section*/}
            <div className="shopping-easy-section">
                <div className="shopping-content">
                    <h2>Shopping made easy</h2>
                    <button className="start-now-btn">Start now</button>
                </div>
            </div>

            {/* Product Section*/}
            <div className="product-section">
                <div className="product-header">
                    <h2>Featured Products</h2>
                    <p className="recommendation-text">Best sellers</p>
                    <button className="see-all-btn">See all</button>
                </div>

                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.productId} className="product-item-home">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                            </div>
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;