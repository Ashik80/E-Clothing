import React from "react";
import "./Products.css";
import Button from "../components/Button";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img
          src="https://colorlib.com/preview/theme/winkel/images/product-6.jpg"
          alt=""
          width="100%"
        />
        <div className="btn-group">
          <Button
            color="primary"
            content="Add to cart"
            style={{ fontSize: 14, margin: "0 0.2rem", boxShadow: "none" }}
          />
          <Button
            content="Buy now"
            style={{ fontSize: 14, margin: "0 0.2rem", boxShadow: "none" }}
          />
        </div>
      </div>
      <div className="product-card-body">
        <h4>ProductName</h4>
        <p>$80.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
