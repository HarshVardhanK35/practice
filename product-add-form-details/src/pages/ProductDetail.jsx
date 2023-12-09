import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productName } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-2);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const foundProduct = data.find((p) => p.productName === productName);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productName]);

  return (
    <>
      <div>
        <h1>Product Detail</h1>
        {product ? (
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>Product Name:</span>{" "}
              {product.productName}
            </p>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>

      <div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </>
  );
};

export default ProductDetail;
