import "./Register.css";
import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { login, userList, setUserList } = useContext(UserContext);

    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        fullName: "",
        address: "",
        email: "",
        phone: "",
    });

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingUser = userList.find(
            (user) => user.userName === formData.userName || user.email === formData.email
        );

        if (existingUser) {
            alert("Username or email already exists!");
            return;
        }

        axios
            .post("http://localhost:3000/users", formData)
            .then((response) => {
                const newUser = response.data;

                const updatedUserList = [...userList, newUser];
                setUserList(updatedUserList);

                login(newUser);
                alert("Registration successful! Logging in...");

                navigate("/");
            })
            .catch((error) => {
                console.error("Error registering user:", error);
                alert("Failed to register. Please try again.");
            });
    };

    return (
        <div>
            <Container className="custom-container">
                <Row className="header-row align-items-center py-2 px-3">
                    <Col xs={6}>
                        <div className="logo">
                            <Link to="/">
                                <img className="logo__img" src="/images/EBay_logo.svg.png" alt="" />
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
                    <Col md={12} className="form-container p-4">
                        <div className="form-wrapper">
                            <h1 className="mb-4 fw-bold" style={{ fontSize: "28px" }}>
                                Create an account:
                            </h1>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        placeholder="Enter username"
                                        className="py-2"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="py-2"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="py-2"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type={passwordVisible ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Create a password"
                                            className="py-2"
                                            required
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            onClick={togglePasswordVisibility}
                                            className="password-toggle"
                                        >
                                            <i className={passwordVisible ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"}></i>
                                        </Button>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="py-2"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Enter your address"
                                        className="py-2"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Check
                                        type="checkbox"
                                        id="termsCheck"
                                        label="I agree to the Terms and Conditions and Privacy Policy"
                                        required
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" className="py-2 mb-4 rounded-pill">
                                        Create personal account
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
