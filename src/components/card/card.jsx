import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/actions/action";
import { QuantityButton } from "../quantityButton/quantityButton";
import "./card.css";

export const Card = ({ eachCard }) => {
  const {
    cardReducer: { cart },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const isCardInCart = cart.some((card) => card.id === eachCard.id);
  const addToCartHandler = (card) => {
    dispatch(addToCartAction(card));
  };

  return (
    <div className="card-wrapper" >
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
          {isCardInCart ? (
            <QuantityButton eachCard={eachCard} />
          ) : (
            <button
              className="btn btn-secondary btn-add-to-cart"
              onClick={() => addToCartHandler(eachCard)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
