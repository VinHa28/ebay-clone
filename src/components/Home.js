import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    // Category data as constants
    const categories = [
        {
            id: 1,
            name: "Luxury",
            imageClass: "luxury",
            imageUrl: "/images/phamthoai.jpg",
            link: "/category/luxury",
        },
        {
            id: 2,
            name: "Sneakers",
            imageClass: "sneakers",
            imageUrl: "/images/tiendop.jpg",
            link: "/category/sneakers",
        },
        {
            id: 3,
            name: "PSA",
            imageClass: "psa",
            imageUrl: "/images/kera.jpg",
            link: "/category/psa",
        },
        {
            id: 4,
            name: "Refurbished",
            imageClass: "refurbished",
            imageUrl: "/images/thandop.jpg",
            link: "/category/refurbished",
        },
        {
            id: 5,
            name: "Trading cards",
            imageClass: "trading-cards",
            imageUrl: "/images/phamthoai.jpg",
            link: "/category/trading-cards",
        },
        {
            id: 6,
            name: "Pre-loved Luxury",
            imageClass: "pre-loved",
            imageUrl: "/images/kera.jpg",
            link: "/category/pre-loved-luxury",
        },
        {
            id: 7,
            name: "Toys",
            imageClass: "toys",
            imageUrl: "/images/thandop.jpg",
            link: "/category/toys",
        },
    ];
    const products = [
        {
            id: 1,
            name: "Apple iPhone 14 Pro",
            price: 999,
            image: "/images/products/product-01.png",
            brandId: "apple",
            categoryId: "smartphone",
            condition: "New",
            shipping: "Free Shipping",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Samsung Galaxy S23 Ultra",
            price: 1199,
            image: "/images/products/product-02.png",
            brandId: "samsung",
            categoryId: "smartphone",
            condition: "New",
            shipping: "Free Shipping",
            rating: 4.7,
        },
        {
            id: 3,
            name: "Sony WH-1000XM5 Headphones",
            price: 399,
            image: "/images/products/product-03.png",
            brandId: "sony",
            categoryId: "electronics",
            condition: "Refurbished",
            shipping: "Free Shipping",
            rating: 4.6,
        },
        {
            id: 4,
            name: "Nike Air Max 270",
            price: 129,
            image: "/images/products/product-04.png",
            brandId: "nike",
            categoryId: "fashion",
            condition: "New with tags",
            shipping: "Free Shipping",
            rating: 4.9,
        },

        {
            id: 5,
            name: "Keo Kera",
            price: 36,
            image: "/images/kera.jpg",
            brandId: "dell",
            categoryId: "laptop",
            condition: "Brand New",
            shipping: "Free Shipping",
            rating: 4.8,
        },
    ];

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
                                    backgroundImage: `url(${category.imageUrl})`,
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
                    <button className="start-now-btn">Start now</button>
                </div>
            </div>
            {/* Product Section */}
            <div className="product-section">
                <div className="product-header">
                    <h2>Featured Products</h2>
                    <p className="recommendation-text">Best sellers</p>
                    <Link to="/product" className="see-all-btn">See all</Link>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
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
