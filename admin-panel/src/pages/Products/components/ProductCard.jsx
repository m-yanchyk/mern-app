import React from "react";
import EyeIcons from "../../../assets/icons/eye.svg";
import PencilIcons from "../../../assets/icons/pencil.svg";
import TrashIcons from "../../../assets/icons/trash.svg";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__title">{product.name}</div>
      <img
        src={`http://localhost:5010/images/${product.images[3]}`}
        alt={product.name}
        className="product-card__img"
      />
      <div className="product-buttons">
        <button className="button-img">
          <img src={EyeIcons} alt="Close button" />
        </button>
        <button className="button-img">
          <img src={PencilIcons} alt="Close button" />
        </button>
        <button className="button-img">
          <img src={TrashIcons} alt="Close button" />
        </button>
      </div>
    </div>
  );
}
