import React from "react";
import "./nav.css";
import * as Icons from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Nav = () => {
  const { pathname } = useLocation();

  const {cardReducer :{cart}} = useSelector(state => state)

  const navigate = useNavigate()

  return (
    <nav className="nav">
      <div className="wrapper nav-wrapper">
        <div className="right-side logo-wrapper">
          <div className="logo">
            <img
              src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
              className="img image-logo"
              alt="happay-logo"
            />
          </div>
          <div className="site-title">
            <h2 className="heading site-title">Happay</h2>
          </div>
        </div>
        <div className="left-side">
          {pathname === "/" ? (
            <div className="cart-icon-wrapper">
              <Icons.BiCartAlt className="icons cart-icon" onClick={() => navigate("/cart")} />
              {cart.length === 0 ? "" : <p className="cart-qyt">{cart.length}</p>}
            </div>
          ) : (
            ""
          )}
          <div className="user-icon-wrapper">
            <Icons.BiUser className="icons user-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};
