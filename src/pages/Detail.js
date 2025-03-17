import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Detail.css";

export default function Detail() {
    return (
        <Container className="custom-container">
            <h1 className="detail__title fw-bold">Product Details</h1>
            <Row>
                <Col md={8}>
                    <div className="detail-media">
                        <img
                            className="detail-media__img"
                            src="/images/products/product-03.png"
                            alt=""
                        ></img>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="detail-content">
                        <h3 className="detail-content__title">
                            Genuine Leather Tassel Purses and Handbags Women
                            Fashion Crossbody Shoulder Bag
                        </h3>
                        <p className="detail-content__price">US $138.00</p>
                        <div className="detail-content__info">
                            <p className="detail-content__desc">
                                Approximately 3,521,622.00 VND
                            </p>
                            <p className="detail-content__desc">
                                Approximately 3,521,622.00 VND
                            </p>
                            <p className="detail-content__desc">
                                Approximately 3,521,622.00 VND
                            </p>
                        </div>
                        <div className="detail-content__actions">
                            <Button className="rounded-pill w-100">
                                Buy It Now
                            </Button>
                            <Button
                                variant="outline-primary"
                                className="rounded-pill w-100"
                            >
                                Add To Card
                            </Button>
                        </div>

                        <div className="detail-content__deli row gy-3">
                            {/* Row 1 */}
                            <div className="col col-3">
                                <p>Shipping:</p>
                            </div>
                            <div className="col col-9">
                                <p>
                                    US $50.00 (approx 1,275,950.00 VND) Economy
                                    International Shipping. See detailsfor
                                    shipping International shipment of items may
                                    be subject to customs processing and
                                    additional charges. Located in: Boston,
                                    Massachusetts, United State
                                </p>
                            </div>
                            {/* Row 2 */}
                            <div className="col col-3">
                                <p>Delivery:</p>
                            </div>
                            <div className="col col-9">
                                <p>
                                    Estimated between Wed, Apr 16 and Fri, May
                                    16 Please note the delivery estimate is
                                    greater than 20 business days.
                                </p>
                            </div>
                            {/* Row 3 */}
                            <div className="col col-3">
                                <p>Payments:</p>
                            </div>
                            <div className="col col-9">
                                <p>
                                    Cash on delivery (COD) Cash on delivery
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
