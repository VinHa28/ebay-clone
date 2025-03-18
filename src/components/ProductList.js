import React, { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import BaseURL from "../others/BaseURL";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState([]);
    const [sortType, setSortType] = useState("price");

    useEffect(() => {
        axios
            .get(`${BaseURL}Product`)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log("Failed to fetch products: ", error));

        axios.get(`${BaseURL}Brand`).then((response) => setBrand(response.data)).catch((error) => console.log("Failed to fetch brands: ", error));
    }, []);

    return (
        <div className="product-list">
            <h4 className="fw-bold">Products</h4>

            <div className="product-list__filter d-flex gap-3 mb-3">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">All Brands</option>
                </select>

                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                </select>
            </div>

            <div className="product-list__items">
                {products.map((product) => (
                    <div key={product.productId} className="product-item">
                        <a href="#!" className="product-item__image-link">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-item__image"
                            />
                        </a>
                        <div className="product-item__info">
                            <h5 className="product-item__name">
                                <a href="#!">{product.name}</a>
                            </h5>
                            <p className="product-item__brand">
                                Brand: {brand.find((b) => b.brandId === product.brandId).name}
                            </p>
                            <p className="product-item__price">
                                Price: ${product.price}
                            </p>
                            <p className="product-item__desc">
                                Rating: ⭐ {product.rating}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
