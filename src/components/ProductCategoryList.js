import React, { useEffect, useState } from "react";
import "./ProductCategoryList.css";
import axios from "axios";
import BaseURL from "../others/BaseURL";

const ProductCategoryList = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    
    useEffect(() => {
        axios
            .get(`${BaseURL}categories`)
            .then((response) => setCategories(response.data))
            .catch((error) =>
                console.log("Failed to fetch categories: ", error)
            );
    }, []);
    
    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        if (onCategorySelect) {
            onCategorySelect(categoryId);
        }
    };
    
    return (
        <div className="">
            <h4 className="fw-bold">Shop by category</h4>
            <ul className="category-list">
                <li className="category-list__item">
                    <a 
                        href="#!" 
                        className={`category-list__link ${selectedCategory === "" ? "active" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleCategoryClick("");
                        }}
                    >
                        All Categories
                    </a>
                </li>
                {categories.map((category) => {
                    return (
                        <li key={category.id} className="category-list__item">
                            <a 
                                href="#!" 
                                className={`category-list__link ${selectedCategory === category.id ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCategoryClick(category.id);
                                }}
                            >
                                {category.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductCategoryList;