import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Detail() {
    return (
        <Container className="custom-container">
            <Row>
                <Col md={6}>
                <div className="detail-media">
                    <img className="detail-media__img" src="/images/products/product-01.png"></img>
                </div>
                </Col>
                <Col md={6}>
                <div>Detail Info</div>
                </Col>
            </Row>
        </Container>
    );
}