import React from "react";
import "./hero.css";
import * as Icons from "react-icons/bi";

export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="heading hero-title">Most Popular</h1>
      <div className="star-divider">
        <div className="divider"></div>
        <Icons.BiStar className="icons star-icons" />
        <div className="divider"></div>
      </div>
    </div>
  );
};
