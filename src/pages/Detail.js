import React, { useState, useEffect, useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Detail.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BaseURL from "../others/BaseURL";
import { UserContext } from "../context/UserContext";
const EXCHANGE_RATE = 25525;

export default function Detail() {
    const { id: productId } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    const { user, addToCart } = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);



    useEffect(() => {
        if (productId) {
            axios.get(`${BaseURL}products/${productId}`)
                .then((response) => {
                    const product = response.data;
                    if (product) {
                        setProductDetail(product);
                        fetchBrandAndCategory(product.brandId, product.categoryId);
                    } else {
                        setError("Product not found!");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching product:", error);
                    setError("Failed to load product details");
                });
        }
    }, [productId]);

    const fetchBrandAndCategory = async (brandId, categoryId) => {
        try {
            const [brandRes, categoryRes] = await Promise.all([
                axios.get(`${BaseURL}brands/${brandId}`),
                axios.get(`${BaseURL}categories/${categoryId}`) // Fixed the typo here (was using {productDetail.categoryId} with curly braces)
            ]);

            setBrand(brandRes.data);
            setCategory(categoryRes.data);
        } catch (error) {
            console.error("Error fetching brand or category:", error);
            setError("Failed to load brand or category information");
        } 
    };

    if (error) {
        return (
            <Container className="custom-container">
                <h1 className="detail__title fw-bold">Product Details</h1>
                <div className="alert alert-danger my-5">{error}</div>
            </Container>
        );
    }

    const handleAddToCart = () => {
        if (!user) {
            alert("Please login to add items to cart");
            return;
        }

        const cartItem = {
            id: Date.now(), 
            userId: user.id,
            productId: parseInt(productId),
            quantity: 1,
            dateAdded: new Date().toISOString(),
            product: productDetail 
        };

        addToCart(cartItem);
        
        alert("Product added to cart!");
    };

    const handleBuyNow = () => {
        handleAddToCart();
        navigate("/cart"); 
    };


    return (
        <Container className="custom-container">
            <h1 className="detail__title fw-bold">Product Details</h1>
            <Row>
                <Col md={8}>
                    <div className="detail-media">
                        <img
                            className="detail-media__img"
                            src={productDetail?.image}
                            alt={productDetail?.name || "Product image"}
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="detail-content">
                        <h3 className="detail-content__title">
                            {productDetail?.name}
                        </h3>
                       
                        <p className="detail-content__brand d-flex align-items-center gap-2">
                            {brand?.image && (
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="detail-content__brand-logo"
                                />
                            )}
                            {brand?.name || "Unknown Brand"}
                        </p>
                        <p className="detail-content__price">
                            US ${productDetail?.price?.toLocaleString() || "0"}
                        </p>
                        <p className="detail-content__desc detail-content__desc--blur">
                            Approximately{" "}
                            {productDetail?.price
                                ? (
                                      productDetail.price * EXCHANGE_RATE
                                  ).toLocaleString("vi-VN")
                                : "0"}{" "}
                            VND
                        </p>
                        <div className="detail-content__info">
                            <p className="detail-content__desc">
                                <span className="fw-bold">Rating: </span>{" "}
                                {productDetail?.rating || "0"} ⭐
                            </p>
                            <p className="detail-content__desc">
                                <span className="fw-bold">Origin: </span>{" "}
                                {brand?.country || "Unknown"}
                            </p>
                            <p className="detail-content__desc">
                                <span className="fw-bold">Description: </span>{" "}
                                {productDetail?.description || "No description available"}
                            </p>
                            <p className="detail-content__desc">
                                <span className="fw-bold">Warranty: </span>{" "}
                                {productDetail?.warranty || "No warranty information"}
                            </p>
                            <p className="detail-content__desc">
                                <span className="fw-bold">In Stock: </span>{" "}
                                {productDetail?.inStock ? "Yes" : "No"}
                            </p>
                        </div>
                        <div className="detail-content__actions">
                        <Button className="rounded-pill w-100" onClick={handleBuyNow}>
                                Buy It Now
                            </Button>
                            <Button
                    variant="outline-primary"
                    className="rounded-pill w-100"
                    onClick={handleAddToCart}
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
                                    International Shipping. See details for
                                    shipping. International shipment of items may
                                    be subject to customs processing and
                                    additional charges.
                                </p>
                            </div>
                            {/* Row 2 */}
                            <div className="col col-3">
                                <p>Delivery:</p>
                            </div>
                            <div className="col col-9">
                                <p>
                                    Please note the delivery estimate is greater
                                    than 20 business days.
                                </p>
                            </div>
                            {/* Row 3 */}
                            <div className="col col-3">
                                <p>Payments:</p>
                            </div>
                            <div className="col col-9">
                                <p>Cash on delivery (COD) Cash on delivery</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}