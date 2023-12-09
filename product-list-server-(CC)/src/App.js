import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  </Router>
);

export default App;
