import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import BaseURL from "../others/BaseURL";
const EXCHANGE_RATE = 25525;

export default function Detail() {
    const { id: productId } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    useEffect(() => {
        if (productId) {
            axios
                .get(`${BaseURL}Product?productId=${productId}`)
                .then((response) => {
                    const product = response.data[0];
                    if (product) setProductDetail(product);
                    else console.log("Product not found!");
                })
                .catch((error) =>
                    console.error("Error fetching product:", error)
                );
        }
    }, [productId]);

    console.log(productDetail);

    useEffect(() => {
        if (productDetail) {
            const fetchBrandAndCategory = async () => {
                try {
                    const [brandRes, categoryRes] = await Promise.all([
                        axios.get(
                            `${BaseURL}Brand?brandId=${productDetail.brandId}`
                        ),
                        axios.get(
                            `${BaseURL}Category?categoryId=${productDetail.categoryId}`
                        ),
                    ]);

                    setBrand(brandRes.data[0]);
                    setCategory(categoryRes.data[0]);
                } catch (error) {
                    console.error("Error fetching brand or category:", error);
                }
            };

            fetchBrandAndCategory();
        }
    }, [productDetail]);

    console.log(brand);
    console.log(category);
    return (
        <Container className="custom-container">
            <h1 className="detail__title fw-bold">Product Details</h1>
            <Row>
                <Col md={8}>
                    <div className="detail-media">
                        <img
                            className="detail-media__img"
                            src={productDetail?.image}
                            alt=""
                        ></img>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="detail-content">
                        <h3 className="detail-content__title">
                            {productDetail?.name || "Loading..."}
                        </h3>
                        <p className="detail-content__brand d-flex align-items-center gap-2">
                            <img
                                src={brand?.image}
                                alt={brand?.name ?? "Loading..."}
                                className="detail-content__brand-logo"
                            />
                            {brand?.name ?? "Loading..."}
                        </p>
                        <p className="detail-content__price">
                            US ${productDetail?.price?.toLocaleString() ?? "0"}
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
                                {productDetail?.rating ?? "0"} ⭐
                            </p>
                            <p className="detail-content__desc">
                                <span className="fw-bold">Origin: </span>{" "}
                                {brand?.country ?? "Loading..."}
                            </p>
                            <p className="detail-content__desc">
                                <span className="fw-bold">Description: </span>{" "}
                                {productDetail?.description ?? ""}
                            </p>
                            <p className="detail-content__desc">
                                <span className="fw-bold">Warranty: </span>{" "}
                                {productDetail?.warranty ?? ""}
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
