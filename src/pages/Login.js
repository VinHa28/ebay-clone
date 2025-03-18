import "./Login.css";

import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { login, userList } = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = userList.find((user) => {
            return (
                (user.userName.toLowerCase() === username.toLocaleLowerCase() || user.email.toLowerCase() === username.toLowerCase()) &&
                user.password === password
            );
        });
        if (user) {
            login(user);
            alert("Login successfully!");
            navigate("/");
        } else {
            alert("Invalid username or password.");
        }
    };
    return (
        <div className="login">
            <Container className="custom-container h-100">
                <div className="logo">
                    <Link to="/">
                        <img
                            className="logo__img"
                            src="/images/EBay_logo.svg.png"
                            alt=""
                        />
                    </Link>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                    <h2 className="login-form__title">
                        Sign in to your account
                    </h2>
                    <p className="login-form__desc">
                        New to eBay?
                        <Link to="/register" className="login-form__link">
                            Create account
                        </Link>
                    </p>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email or username"
                        className="login-form__input"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="login-form__input"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        className="rounded-pill fw-bold w-100 mt-3"
                        style={{ height: "48px" }}
                    >
                        Login
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
