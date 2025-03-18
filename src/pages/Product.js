import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCategoryList from "../components/ProductCategoryList";
import './Product.css';
import ProductList from "../components/ProductList";

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    
    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
    };
    
    return <div className="product">
        <Container className="custom-container">
            <h1 className="product__title fw-bold">Products List</h1>
            <Row>
                <Col md={2}>
                    <ProductCategoryList onCategorySelect={handleCategorySelect}></ProductCategoryList>
                </Col>
                <Col md={10}>
                    <ProductList selectedCategory={selectedCategory}></ProductList>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default Product;