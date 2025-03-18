import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart"
import Home from "./components/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
