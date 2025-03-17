import React, { useState } from "react";
import "./ProductList.css";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
const products = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro",
        price: 999,
        image: "/images/products/product-01.png",
        brandId: "apple",
        categoryId: "smartphone",
        condition: "New",
        shipping: "Free Shipping",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 1199,
        image: "/images/products/product-02.png",
        brandId: "samsung",
        categoryId: "smartphone",
        condition: "New",
        shipping: "Free Shipping",
        rating: 4.7,
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        price: 399,
        image: "/images/products/product-03.png",
        brandId: "sony",
        categoryId: "electronics",
        condition: "Refurbished",
        shipping: "Free Shipping",
        rating: 4.6,
    },
    {
        id: 4,
        name: "Nike Air Max 270",
        price: 129,
        image: "/images/products/product-04.png",
        brandId: "nike",
        categoryId: "fashion",
        condition: "New with tags",
        shipping: "Free Shipping",
        rating: 4.9,
    },
    {
        id: 5,
        name: "Dell XPS 13 Laptop",
        price: 1299,
        image: "/images/products/product-05.png",
        brandId: "dell",
        categoryId: "laptop",
        condition: "Brand New",
        shipping: "Free Shipping",
        rating: 4.8,
    },
];
export default function ProductList() {
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");
    const [sortType, setSortType] = useState("price");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const filteredProducts = products
        .filter(
            (product) =>
                product.name.toLowerCase().includes(search.toLowerCase()) &&
                (brand === "" || product.brandId === brand)
        )
        .sort((a, b) =>
            sortType === "price" ? a.price - b.price : b.rating - a.rating
        );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="product-list">
            <h4 className="fw-bold">Products</h4>

            <div className="product-list__filter d-flex gap-3 mb-3">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">All Brands</option>
                    {[...new Set(products.map((p) => p.brandId))].map(
                        (brand) => (
                            <option key={brand} value={brand}>
                                {brand.charAt(0).toUpperCase() + brand.slice(1)}
                            </option>
                        )
                    )}
                </select>

                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                </select>
            </div>

            <div className="product-list__items">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <a href="#" className="product-item__image-link">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-item__image"
                            />
                        </a>
                        <div className="product-item__info">
                            <h5 className="product-item__name">
                                <a href="#">{product.name}</a>
                            </h5>
                            <p className="product-item__brand">
                                Brand:{" "}
                                {product.brandId.charAt(0).toUpperCase() +
                                    product.brandId.slice(1)}
                            </p>
                            <p className="product-item__price">
                                Price: ${product.price}
                            </p>

                            <p className="product-item__desc">
                                Condition: {product.condition}
                            </p>
                            <p className="product-item__desc">
                                Shipping: {product.shipping}
                            </p>
                            <p className="product-item__desc">
                                Rating: ⭐ {product.rating}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination d-flex gap-2 mt-3">
                {Array.from(
                    {
                        length: Math.ceil(
                            filteredProducts.length / itemsPerPage
                        ),
                    },
                    (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`btn ${
                                currentPage === i + 1
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                            }`}
                        >
                            {i + 1}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
