import React from "react";
import "./cart.css";
import * as Icons from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QuantityButton } from "../../components/quantityButton/quantityButton";
import {
  totalFinalPrice,
  totalOriginalPrice,
} from "../../utils/priceCalculation";

const Cart = () => {
  const {
    cardReducer: { cart },
  } = useSelector((state) => state);

  const navigate = useNavigate();

  const getTotalFinalPrice = totalFinalPrice(cart);
  const getTotalOriginalPrice = totalOriginalPrice(cart);

  const totalDiscount = getTotalOriginalPrice - getTotalFinalPrice;

  const deliveryCharge = 10;
  const tax = 5;

  const getTotalPrice = getTotalFinalPrice + deliveryCharge + tax;

  return (
    <section className="section cart-section">
      {cart?.length === 0 ? (
        <p className=" wrapper paragraph message-text">No Items in the Cart</p>
      ) : (
        <div className="wrapper cart-wrapper">
          <header>
            <p className="paragraph" onClick={() => navigate("/")}>
              <Icons.BiArrowBack className="icons back-icon" /> Back to Home
            </p>
            <h2 className="heading">Order Summary ( {cart.length} items)</h2>
          </header>

          <div className="summary-container">
            <div className="cart-items-wrapper">
              <div className="header">
                <div className="paragraph table-heading">S.No</div>
                <div className="paragraph table-heading">Items</div>
                <div className="paragraph table-heading">Qty</div>
              </div>

              <div className="cards">
                {cart.map((item, i) => (
                  <div className="row">
                    <div className="paragraph table-description">{i + 1}.</div>
                    <div
                      className="paragraph table-description"
                      style={{ textAlign: "left" }}
                    >
                      {item.name}
                    </div>
                    <div className="paragraph table-description">
                      <QuantityButton eachCard={item} />
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="paragraph add-more-text"
                onClick={() => navigate("/")}
              >
                <Icons.BiPlus className="icons plus-icon" /> Add more items
              </p>
            </div>

            <div className="price-details-wrapper">
              <div className="header">
                <h2 className="heading">Price Details</h2>
              </div>

              <div className="cards price-infos">
                {cart.map((item) => (
                  <div className="price-row">
                    <div className="paragraph price-description">
                      <span>
                        {item.quantity} * ₹{item.final_price}
                      </span>{" "}
                      <span> ₹{item.original_price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="price-calculation-wrapper">
                <ul>
                  <li className="lists">
                    <span>Total Saving</span>
                    <span> -₹{totalDiscount}</span>
                  </li>
                  <li className="lists">
                    <span>Delivery Fee</span>
                    <span> ₹{deliveryCharge}</span>
                  </li>
                  <li className="lists">
                    <span>Taxes and Charges</span>
                    <span> ₹{tax}</span>
                  </li>
                </ul>
              </div>

              <div className="cart-footer">
                <h3 className="heading">
                  <span>To Pay</span> <span>₹{getTotalPrice}</span>
                </h3>

                <button className="btn btn-pay">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Cart };
