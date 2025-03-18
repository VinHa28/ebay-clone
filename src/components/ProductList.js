import React, { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import BaseURL from "../others/BaseURL";
import { Link } from "react-router-dom";

const EXCHANGE_RATE = 25525;
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [searchedBrands, setSearchedBrands] = useState("");
    const [sortType, setSortType] = useState("price");
    const [searchedName, setSearchedName] = useState("");

    useEffect(() => {
        axios
            .get(`${BaseURL}products`)
            .then((response) => setProducts(response.data))
            .catch((error) => console.log("Failed to fetch products: ", error));

        axios.get(`${BaseURL}brands`).then((response) => setBrands(response.data)).catch((error) => console.log("Failed to fetch brands: ", error));
    }, []);

    const filteredProducts = products.filter((product) => {
        const fitSearchName = product.name.toLowerCase().includes(searchedName.toLowerCase());
        const fitBrand = product.brandId.toString() === searchedBrands.toString() || searchedBrands.toString() === ""
        return fitSearchName && fitBrand;
    });

    console.log(brands);
    

    return (
        <div className="product-list">
            <h4 className="fw-bold">Products</h4>

            <div className="product-list__filter d-flex gap-3 mb-3">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchedName}
                    onChange={(e) => setSearchedName(e.target.value)}
                />

                <select name="brand" value={searchedBrands} onChange={(e) => setSearchedBrands(e.target.value)}>
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                            {brand.name}
                        </option>
                    ))}
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
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <Link to={`/detail/${product.id}`} className="product-item__image-link">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-item__image"
                            />
                        </Link>
                        <div className="product-item__info">
                            <h5 className="product-item__name">
                                <Link to={`/detail/${product.id}`}>{product.name}</Link>
                            </h5>
                            <p className="product-item__brand">
                                Brand: {brands.find(brand => brand.id.toString() === product.brandId.toString()).name}
                            </p>
                            <p className="product-item__price">
                                Price: ${product.price}
                            </p>
                            <p className="product-item__desc">
                                +{(product.price * EXCHANGE_RATE).toLocaleString("vi-VN")} VND 
                            </p>
                            <p className="product-item__desc">
                                Rating: {product.rating} ⭐ 
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
