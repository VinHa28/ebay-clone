import "./Register.css";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container className="custom-container">
            {/* Header with logo and sign in link */}
            <Row className="header-row align-items-center py-2 px-3">
                <Col xs={6}>
                    <div className="logo">
                        <Link to="/">
                            <img
                                className="logo__img"
                                src="/images/EBay_logo.svg.png"
                                alt=""
                            />
                        </Link>
                    </div>
                </Col>
                <Col xs={6} className="text-end">
                    <span className="sign-in-text">
                        Already have an account?{" "}
                        <Link to="/login" className="fw-bold">
                            Sign in
                        </Link>
                    </span>
                </Col>
            </Row>

            <Row className="main-content mx-0">
                {/* Left side - Image */}
                <Col md={6} className="p-0 d-none d-md-block">
                    <div className="registration-image h-100"></div>
                </Col>

                {/* Right side - Form */}
                <Col md={6} className="form-container p-4">
                    <div className="form-wrapper">
                        <h1 className="mb-4">Create an account:</h1>

                        <Form>
                            {/* Name fields */}
                            <Row className="mb-3">
                                <Col sm={12}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full name"
                                        className="py-2"
                                    />
                                </Col>
                            </Row>

                            {/* Email field */}
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    className="py-2"
                                />
                            </Form.Group>

                            {/* Password field with toggle visibility */}
                            <Form.Group className="mb-3">
                                <InputGroup>
                                    <Form.Control
                                        type={
                                            passwordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Password"
                                        className="py-2"
                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={togglePasswordVisibility}
                                        className="password-toggle"
                                    >
                                        <i
                                            className={
                                                passwordVisible
                                                    ? "bi bi-eye-fill"
                                                    : "bi bi-eye-slash-fill"
                                            }
                                        ></i>
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <div className="terms-text mb-4 small text-muted">
                                By selecting{" "}
                                <strong>Create personal account</strong>, you
                                agree to our <a href="#!">User Agreement</a> and
                                acknowledge reading our{" "}
                                <a href="#!">User Privacy Notice</a>.
                            </div>

                            <div className="d-grid gap-2">
                                <Button variant="primary" className="py-2 mb-4">
                                    Create personal account
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
