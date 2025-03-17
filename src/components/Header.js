import React from "react";
import "./Header.css";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBell } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <div className="header">
            <Container className="custom-container">
                <nav className="header-top d-flex justify-content-between align-items-center py-2">
                    <ul className="header-top__list">
                        <li className="header-top__item">
                            Hi! <a href="#">Sign in</a> or <a href="#">register</a>
                        </li>
                        <li className="header-top__item">
                            <a className="header-top__link" href="#">
                                Daily deals
                            </a>
                        </li>
                        <li className="header-top__item">
                            <a className="header-top__link" href="#">
                                Brand outlet
                            </a>
                        </li>
                        <li className="header-top__item">
                            <a className="header-top__link" href="#">
                                Gift card
                            </a>
                        </li>
                        <li className="header-top__item">
                            <a className="header-top__link" href="#">
                                Help & Contact
                            </a>
                        </li>
                    </ul>
                    <div className="header-top__right d-flex align-items-center gap-3">
                        <ul className="header-top__list">
                            <li className="header-top__item">
                                <a className="header-top__link" href="#">
                                    Ship to
                                </a>
                            </li>
                            <li className="header-top__item">
                                <a className="header-top__link" href="#">
                                    Sell
                                </a>
                            </li>
                            <li className="header-top__item">
                                <a className="header-top__link" href="#">
                                    Watchlist
                                </a>
                            </li>
                            <li className="header-top__item">
                                <a className="header-top__link" href="#">
                                    My eBay
                                </a>
                            </li>
                        </ul>
                        <div className="header-top__actions d-flex gap-3">
                            <a
                                href="#"
                                className="header-top__notice header-top__btn"
                            > <FontAwesomeIcon icon={faBell} style={{color: "var(--text-color)"}}/> </a>
                            <a
                                href="#"
                                className="header-top__cart header-top__btn"
                            ><FontAwesomeIcon icon={faCartShopping} style={{color: "var(--text-color)"}}/></a>
                        </div>
                    </div>
                </nav>
                <div className="header-main d-flex gap-2 align-items-center">
                    <div className="logo">
                        <a href="#">
                            <img className="logo__img" src="/images/EBay_logo.svg.png"/>
                        </a>
                    </div>
                    <a href="#" className="header-main__link" >Shop by category</a>
                    <div className="header-main__search d-flex align-items-center gap-2 w-100 h-100">
                        <input
                            className="header-main__input h-100 rounded-pill"
                            type="text"
                            placeholder="Search for items"
                        />
                        <Button className="header-main__btn rounded-pill font-weight-bold h-100">Search</Button>
                    </div>

                    
                    <a href="#" className="header-main__link">Advance</a>

                </div>
            </Container>
        </div>
    );
};

export default Header;
