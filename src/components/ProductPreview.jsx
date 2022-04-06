import React from "react";

const ProductPreview = ({ title, description, price, img }) => {
  return (
    <div className="product-preview">
      <h2>{title}</h2>
      {/* <img src={img} alt="" /> */}
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductPreview;
