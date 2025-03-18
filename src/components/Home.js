import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Home() {
    
    const [categories, setCategories] = useState([]); 
    const [products, setProducts] = useState([]); 
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/categories") 
            .then(response => setCategories(response.data))
            .catch(error => console.error("Error fetching categories:", error));

        axios.get("http://localhost:3000/products") 
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));

        axios.get("http://localhost:3000/brands")
        .then(response => setBrands(response.data))
        .catch(error => console.error("Error fetching brands:", error))
    }, []);
    return (
        <div className="home">
            {/* Hero Banner Section */}
            <div className="hero-banner">
                <div className="hero-content">
                    <h1>Returns made simple</h1>
                    <p>
                        Not happy with your purchase? It's easy to start a
                        return.
                    </p>
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
                    {categories.map((category) => (
                        
                        <a
                            key={category.id}
                            href={category.link}
                            className="category-item"
                            aria-label={`Browse ${category.name} products`}
                        >
                            <div
                                className={`category-image ${category.imageClass}`}
                                style={{
                                    backgroundImage: `url(${category.image})`,
                                }}
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
                    <a className="start-now-btn" href="/product">Start now</a>
                </div>
            </div>

            {/* Brand Section */}
            <div className="categories-section">
                <h2>Explore Brand</h2>
                <div className="category-grid">
                    {brands.map((brand) => (
                        
                        <Link
                        key={brand.id}
                        to={`/product?brand=${brand.id}`}
                        className="category-item"
                        aria-label={`Browse ${brand.name} products`}
                    >
                        <div
                            className={`category-image ${brand.imageClass}`}
                            style={{
                                backgroundImage: `url(${brand.image})`,
                            }}
                        />
                        <p>{brand.name}</p>
                    </Link>
                    ))}
                </div>
            </div>
            {/* products Section */}
            <div className="product-section">
                <div className="product-header">
                    <h2>Featured products</h2>
                    <p className="recommendation-text">Best sellers</p>
                    <Link to="/product" className="see-all-btn">See all</Link>
                </div>
                <div className="product-grid">
                    {products.slice(0, 5).map((product) => (
                        <div key={product.id} className="product-item-home">
                            <div className="product-image-container">
                                <Link to={`/detail/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                </Link>
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