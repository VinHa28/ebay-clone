import "./Login.css";

import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="login">
            <Container className="custom-container h-100">
                <div className="logo">
                    <Link to="/">
                        <a href="#!">
                            <img
                                className="logo__img"
                                src="/images/EBay_logo.svg.png"
                                alt=""
                            />
                        </a>
                    </Link>
                </div>

                <form className="login-form">
                    <h2 className="login-form__title">
                        Sign in to your account
                    </h2>
                    <p className="login-form__desc">
                        New to eBay?
                        <a href="#!" className="login-form__link">
                            Create account
                        </a>
                    </p>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email or username"
                        className="login-form__input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="login-form__input"
                    />

                    <Button
                        className="rounded-pill fw-bold w-100 mt-3"
                        style={{ height: "48px" }}
                    >
                        Continue
                    </Button>
                </form>
            </Container>
            <p className="text-center d-block">
                Copyright © 1995-2025 eBay Inc. All Rights Reserved.
                Accessibility, User Agreement, Privacy, Consumer Health Data,
                Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy
                Choices and AdChoice
            </p>
        </div>
    );
}
