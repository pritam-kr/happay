import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantityAction,
  incrementQuantityAction,
  removeCartItemAction,
} from "../../redux/actions/action";
import "./qyt.css";

export const QuantityButton = ({ eachCard }) => {
  const dispatch = useDispatch();

  const incrementQuantityHandler = (id) => {
    dispatch(incrementQuantityAction(id));
  };

  const decrementQuantityHandler = (id) => {
    dispatch(decrementQuantityAction(id));
  };

  return (
    <>
      <div className="qyt-btn-wrapper">
        {eachCard.quantity <= 1 ? (
          <button className="btn btn-qyt btn-decrement " onClick={() => dispatch(removeCartItemAction(eachCard.id))}>-</button>
        ) : (
          <button
            onClick={() => decrementQuantityHandler(eachCard.id)}
            className="btn btn-qyt btn-decrement "
          >
            -
          </button>
        )}

        <div className="qyt">{eachCard.quantity}</div>
        <button
          className="btn btn-qyt btn-increment"
          onClick={() => incrementQuantityHandler(eachCard.id)}
        >
          +
        </button>
      </div>
    </>
  );
};
