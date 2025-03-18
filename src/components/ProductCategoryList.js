import React, { useEffect, useState } from "react";
import "./ProductCategoryList.css";
import axios from "axios";
import BaseURL from "../others/BaseURL";
import { Link } from "react-router-dom";

const ProductCategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get(`${BaseURL}categories`)
            .then((response) => setCategories(response.data))
            .catch((error) =>
                console.log("Failed to fetch categories: ", error)
            );
    }, []);
    console.log(categories);
    return (
        <div className="">
            <h4 className="fw-bold">Shop by category</h4>
            <ul className="category-list">
                {categories.map((category) => {
                    return (
                        <li key={category.categoryId} className="category-list__item">
                            <Link to="/product" className="category-list__link">
                                {category.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductCategoryList;
