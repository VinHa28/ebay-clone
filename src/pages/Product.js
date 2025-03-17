import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCategoryList from "../components/ProductCategoryList";
import './Product.css';
import ProductList from "../components/ProductList";

const Product = () => {
    return <div className="product">
        <Container className="custom-container">
            <h1 className="product__title fw-bold">Products List</h1>
            <Row>
                <Col md={2}>
                    <ProductCategoryList></ProductCategoryList>
                </Col>
                <Col md={10}>
                    <ProductList></ProductList>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default Product;
