import React, { useEffect, useState } from "react";
import "./ProductCategoryList.css";
import axios from "axios";
import BaseURL from "../others/BaseURL";

const ProductCategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get(`${BaseURL}Category`)
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
                            <a href="#!" className="category-list__link">
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
