import React from "react";
import "./card.css";

export const Card = ({ eachCard }) => {
  return (
    <div className="card-wrapper" key={eachCard}>
      <img src={eachCard.img_url} alt={eachCard.name} className="card-img" />

      <div className="card-info">
        <div className="card-header">
          <h3 className="heading card-name">{eachCard.name}</h3>{" "}
          <span className="card-price">
            {" "}
            {eachCard.original_price && (
              <span className="card-price original-price">
                {" "}
                ₹ {eachCard.original_price}
              </span>
            )}
            ₹ {eachCard.final_price}
          </span>
        </div>
        <p className="paragraph card-description">{eachCard.description}</p>
        <div className="card-footer">
          <button className="btn btn-secondary btn-add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
