import React, { useContext } from "react";
import "./Header.css";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Header = () => {
    const {user, cart } = useContext(UserContext);
    return (
        <div className="header">
            <Container className="custom-container">
                <nav className="header-top d-flex justify-content-between align-items-center py-2">
                    <ul className="header-top__list">
                        {user && <li className="header-top__item">Hello, {user.userName}</li>}
                        <li className={user && "d-none" + " header-top__item"}>
                            Hi!{" "}
                            <Link to="/login" style={{ textDecoration: "underline" }}> Sign in </Link>{" "}
                            or{" "}
                            <Link to="/register" style={{ textDecoration: "underline" }}> register. </Link>
                        </li>
                        <li className="header-top__item">
                            <Link className="header-top__link" to="/">
                                Daily deals
                            </Link>
                        </li>
                        <li className="header-top__item">
                            <Link className="header-top__link" to="/">
                                Brand outlet
                            </Link>
                        </li>
                        <li className="header-top__item">
                            <Link className="header-top__link" to="/">
                                Gift card
                            </Link>
                        </li>
                        <li className="header-top__item">
                            <Link className="header-top__link" to="/">
                                Help & Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="header-top__right d-flex align-items-center gap-3">
                        <ul className="header-top__list">
                            <li className="header-top__item">
                                <Link className="header-top__link" to="/">
                                    Ship to
                                </Link>
                            </li>
                            <li className="header-top__item">
                                <Link className="header-top__link" to="/">
                                    Sell
                                </Link>
                            </li>
                            <li className="header-top__item">
                                <Link className="header-top__link" to="/">
                                    Watchlist
                                </Link>
                            </li>
                            <li className="header-top__item">
                                <Link className="header-top__link" to="/">
                                    My eBay
                                </Link>
                            </li>
                        </ul>
                        <div className="header-top__actions d-flex gap-3">
                            <Link
                                to="/"
                                className="header-top__notice header-top__btn"
                            >
                                {" "}
                                <FontAwesomeIcon
                                    icon={faBell}
                                    style={{ color: "var(--text-color)" }}
                                />{" "}
                            </Link>
                            <Link
                                to="/cart"
                                className="header-top__cart header-top__btn"
                            >
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    style={{ color: "var(--text-color)" }}
                                />
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="header-main d-flex gap-2 align-items-center">
                    <div className="logo">
                        <Link to="/">
                            <img
                                className="logo__img"
                                src="/images/EBay_logo.svg.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <Link to="/" className="header-main__link">
                        Shop by category
                    </Link>
                    <div className="header-main__search d-flex align-items-center gap-2 w-100 h-100">
                        <input
                            className="header-main__input h-100 rounded-pill"
                            type="text"
                            placeholder="Search for items"
                        />
                        <Button className="header-main__btn rounded-pill font-weight-bold h-100">
                            Search
                        </Button>
                    </div>

                    <Link to="/" className="header-main__link">
                        Advance
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Header;
