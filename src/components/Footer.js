import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
    // Footer column data
    const footerColumns = [
        {
            title: "Buy",
            links: [
                { name: "Registration", url: "/registration" },
                { name: "Bidding & buying help", url: "/help/buying" },
                { name: "Stores", url: "/stores" },
                { name: "Creator Collections", url: "/creator-collections" },
                { name: "eBay for Charity", url: "/charity" },
                { name: "Charity Shop", url: "/charity-shop" },
                { name: "Seasonal Sales and events", url: "/events" },
                { name: "eBay Gift Cards", url: "/gift-cards" },
            ],
        },
        {
            title: "Sell",
            links: [
                { name: "Start selling", url: "/start-selling" },
                { name: "How to sell", url: "/how-to-sell" },
                { name: "Business sellers", url: "/business-sellers" },
                { name: "Affiliates", url: "/affiliates" },
            ],
        },
        {
            title: "Tools & apps",
            links: [
                { name: "Developers", url: "/developers" },
                { name: "Security center", url: "/security" },
                { name: "Site map", url: "/sitemap" },
            ],
        },
        {
            title: "eBay companies",
            links: [{ name: "TCGplayer", url: "/tcgplayer" }],
        },
        {
            title: "Stay connected",
            socialLinks: [
                {
                    name: "Facebook",
                    url: "https://www.facebook.com/ebay",
                    icon: "facebook",
                },
                {
                    name: "X (Twitter)",
                    url: "https://twitter.com/ebay",
                    icon: "twitter",
                },
            ],
        },
        {
            title: "About eBay",
            links: [
                { name: "Company Info", url: "/company" },
                { name: "News", url: "/news" },
                {
                    name: "Deferred Prosecution Agreement with District of Massachusetts",
                    url: "/dpa",
                },
                { name: "Investors", url: "/investors" },
                { name: "Careers", url: "/careers" },
                { name: "Diversity & Inclusion", url: "/diversity" },
                { name: "Global Impact", url: "/impact" },
                { name: "Government relations", url: "/government" },
                { name: "Advertise with us", url: "/advertise" },
                { name: "Policies", url: "/policies" },
                { name: "Verified Rights Owner (VeRO) Program", url: "/vero" },
                { name: "eCI Licenses", url: "/licenses" },
            ],
        },
        {
            title: "Help & Contact",
            links: [
                { name: "Seller Center", url: "/seller-center" },
                { name: "Contact Us", url: "/contact" },
                { name: "eBay Returns", url: "/returns" },
                { name: "eBay Money Back Guarantee", url: "/guarantee" },
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Announcements", url: "/announcements" },
                { name: "eBay Community", url: "/community" },
                { name: "eBay for Business Podcast", url: "/podcast" },
            ],
        },
        {
            title: "eBay Sites",
            hasCountrySelector: true,
        },
    ];

    return (
        <footer className="footer">
            <Container className="custom-container">
                <div className="footer-content">
                    {footerColumns.map((column, index) => (
                        <div key={index} className="footer-column">
                            <h3>{column.title}</h3>

                            {column.links && (
                                <ul>
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.url}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {column.socialLinks && (
                                <ul className="social-links">
                                    {column.socialLinks.map(
                                        (socialLink, socialIndex) => (
                                            <li key={socialIndex}>
                                                <a href={socialLink.url}>
                                                    {socialLink.icon ===
                                                        "facebook" && (
                                                        <span className="icon facebook">
                                                            ƒ
                                                        </span>
                                                    )}
                                                    {socialLink.icon ===
                                                        "twitter" && (
                                                        <span className="icon twitter">
                                                            𝕏
                                                        </span>
                                                    )}
                                                    {socialLink.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}

                            {column.hasCountrySelector && (
                                <div className="country-selector">
                                    <button className="country-button">
                                        <span className="flag-icon vn-flag"></span>
                                        VietNam
                                        <span className="dropdown-arrow">
                                            ▼
                                        </span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p>
                        Copyright © 1995-2025 eBay Inc. All Rights Reserved.
                        <a href="/accessibility">Accessibility</a>,
                        <a href="/user-agreement">User Agreement</a>,
                        <a href="/privacy">Privacy</a>,
                        <a href="/consumer-protection">Consumer Health Data</a>,
                        <a href="/payments-terms">Payments Terms of Use</a>,
                        <a href="/cookies">Cookies</a>,
                        <a href="/ca-privacy">CA Privacy Notice</a>,
                        <a href="/your-privacy-choices">Your Privacy Choices</a>
                        <span className="icon-ca">CA</span> and
                        <a href="/adchoice">AdChoice</a>
                        <span className="icon-ad">i</span>
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
