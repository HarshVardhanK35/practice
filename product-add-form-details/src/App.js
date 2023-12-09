import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import AddProductForm from './components/AddProductForm';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import './App.css'

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProductForm/>} />
          <Route path="/products/:productName" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
