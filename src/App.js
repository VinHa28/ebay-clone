import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Home from "./components/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

function Layout() {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/register";

    return (
        <div className="App">
            {!hideHeaderFooter && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
