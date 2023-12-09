import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (productName) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to view the details?"
    );

    if (isConfirmed) {
      const encodedProductName = encodeURIComponent(productName);
      navigate(`/products/${encodedProductName}`);
    }
  };

  return (
    <>
      <div>
        <h1>Product List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link
                      to={`/products/${encodeURIComponent(
                        product.productName
                      )}`}
                      onClick={() => handleProductClick(product.productName)}
                    >
                      {product.productName}
                    </Link>
                  </td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
      <h2>
      Add Products
      </h2>
        <Link to="/products/add">Add Product</Link>{" "}
      </div>
    </>
  );
};

export default Products;
