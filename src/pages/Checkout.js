import React from "react";
import "./Checkout.css";
import { Button, Col, Container, Row } from "react-bootstrap";
export default function Checkout() {
    return (
        <div className="checkout">
            <Container className="">
                <h1 className="fw-bold d-flex align-items-center" style={{gap: "10px", fontSize: "28px"}}>
                    <img
                        alt=""
                        src="/images/EBay_logo.svg.png"
                        style={{ width: "120px" }}
                    />

                    Checkout
                </h1>
                <Row>
                    <Col md={8} sm={12}>
                        <div className="checkout__left">
                            <div className="checkout__left-group">
                                <h3 className="checkout__title">Ship to</h3>
                                <p className="checkout__desc mt-2">
                                    Name: Ha Van Vinh
                                </p>
                                <p className="checkout__desc mt-2">
                                    Address: Ha Noi, Vietnam, ZIP 10000
                                </p>
                                <p className="checkout__desc mt-2">
                                    Phone +84 123 456 789
                                </p>
                                <button
                                    className="checkout__desc mt-3 d-block"
                                    style={{
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                    }}
                                >
                                    Change
                                </button>
                            </div>
                            <div className="checkout__left-group">
                                <h3 className="checkout__title">
                                    Review order
                                </h3>
                                {/* Product Item */}
                                <div className="checkout-product">
                                    <div className="row">
                                        <div className="col col-2">
                                            <img
                                                alt=""
                                                src="/images/products/product-01.png"
                                                className="checkout-product__img"
                                            />
                                        </div>
                                        <div className="col col-10">
                                            <div className="checkout-product__info">
                                                <h4 className="checkout-product__title">
                                                    Authentic Roberto Serpentin
                                                    New Collection Leather
                                                    Italian Designer Sneaker
                                                    Blue
                                                </h4>
                                                <p className=" checkout-product__price">
                                                    US $269.70
                                                    <span
                                                        className="checkout-product__price checkout-product__price--sale"
                                                        s
                                                    >
                                                        US $310.00
                                                    </span>
                                                </p>
                                                <div className="mb-3">
                                                    <p className="checkout-product__desc checkout-product__desc--blur">
                                                        Quantity 1
                                                    </p>
                                                    <a
                                                        href="#!"
                                                        className="checkout-product__desc"
                                                        style={{
                                                            textDecoration:
                                                                "underline",
                                                        }}
                                                    >
                                                        Remove
                                                    </a>
                                                </div>
                                                <p className="mb-3 checkout-product__desc checkout-product__desc--blur">
                                                    Returns accepted
                                                </p>
                                                <p className="checkout-product__desc checkout-product__desc--bold">
                                                    Delivery
                                                </p>
                                                <p className="checkout-product__desc">
                                                    Est. delivery: Mar 26 – May
                                                    2
                                                </p>
                                                <p className="checkout-product__desc">
                                                    Standard International
                                                    Shipping
                                                </p>
                                                <p className="checkout-product__desc checkout-product__desc--bold">
                                                    US $84.50
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Item */}
                                <div className="checkout-product">
                                    <div className="row">
                                        <div className="col col-2">
                                            <img
                                                alt=""
                                                src="/images/products/product-02.png"
                                                className="checkout-product__img"
                                            />
                                        </div>
                                        <div className="col col-10">
                                            <div className="checkout-product__info">
                                                <h4 className="checkout-product__title">
                                                    Authentic Roberto Serpentin
                                                    New Collection Leather
                                                    Italian Designer Sneaker
                                                    Blue
                                                </h4>
                                                <p className=" checkout-product__price">
                                                    US $269.70
                                                    <span
                                                        className="checkout-product__price checkout-product__price--sale"
                                                        s
                                                    >
                                                        US $310.00
                                                    </span>
                                                </p>
                                                <div className="mb-3">
                                                    <p className="checkout-product__desc checkout-product__desc--blur">
                                                        Quantity 1
                                                    </p>
                                                    <a
                                                        className="checkout-product__desc"
                                                        href="#!"
                                                        style={{
                                                            textDecoration:
                                                                "underline",
                                                        }}
                                                    >
                                                        Remove
                                                    </a>
                                                </div>
                                                <p className="mb-3 checkout-product__desc checkout-product__desc--blur">
                                                    Returns accepted
                                                </p>
                                                <p className="checkout-product__desc checkout-product__desc--bold">
                                                    Delivery
                                                </p>
                                                <p className="checkout-product__desc">
                                                    Est. delivery: Mar 26 – May
                                                    2
                                                </p>
                                                <p className="checkout-product__desc">
                                                    Standard International
                                                    Shipping
                                                </p>
                                                <p className="checkout-product__desc checkout-product__desc--bold">
                                                    US $84.50
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Product Item */}
                                <div className="checkout-product">
                                    <div className="row">
                                        <div className="col col-2">
                                            <img
                                                alt=""
                                                src="/images/products/product-03.png"
                                                className="checkout-product__img"
                                            />
                                        </div>
                                        <div className="col col-10">
                                            <div className="checkout-product__info">
                                                <h4 className="checkout-product__title">
                                                    Authentic Roberto Serpentin
                                                    New Collection Leather
                                                    Italian Designer Sneaker
                                                    Blue
                                                </h4>
                                                <p className=" checkout-product__price">
                                                    US $269.70
                                                    <span
                                                        className="checkout-product__price checkout-product__price--sale"
                                                        s
                                                    >
                                                        US $310.00
                                                    </span>
                                                </p>
                                                <div className="mb-3">
                                                    <p className="checkout-product__desc checkout-product__desc--blur">
                                                        Quantity 1
                                                    </p>
                                                    <a
                                                        className="checkout-product__desc"
                                                        href="#!"
                                                        style={{
                                                            textDecoration:
                                                                "underline",
                                                        }}
                                                    >
                                                        Remove
                                                    </a>
                                                </div>
                                                <p className="mb-3 checkout-product__desc checkout-product__desc--blur">
                                                    Returns accepted
                                                </p>
                                                <p className="checkout-product__desc checkout-product__desc--bold">
                                                    Delivery
                                                </p>
                                                <p className="checkout-product__desc">
                                                    Est. delivery: Mar 26 – May
                                                    2
                                                </p>
                                                <p className="checkout-product__desc">
                                                    Standard International
                                                    Shipping
                                                </p>
                                                <p className="checkout-product__desc checkout-product__desc--bold">
                                                    US $84.50
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="checkout__right">
                            <h3 className="checkout__title">Order Summary</h3>
                            <div className="d-flex justify-content-between align-items-center mt-1">
                                <p className="checkout__desc">Items (2)</p>
                                <p className="checkout__desc">US $652.50</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-1">
                                <p className="checkout__desc">Shipping</p>
                                <p className="checkout__desc">US $169.00</p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center checkout__total">
                                <p className="checkout__desc checkout__desc--bold">
                                    Order total
                                </p>
                                <p className="checkout__desc checkout__desc--bold">
                                    US $169.00
                                </p>
                            </div>

                            <Button
                                className="rounded-pill w-100 fw-bold"
                                style={{ height: "48px" }}
                            >
                                Confirm and pay
                            </Button>
                            <p className="checkout__desc text-center mt-3">
                                Purchase protected by
                                <a href="#!" className="fw-bold">
                                    eBay Money Back Guarantee
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
