import React from "react";
import CardItem from "./CardItem";
import logo from "../../img/Atom.svg";

const CardContainer = ({ items, isLoading }) => {
  return isLoading ? (
    <img src={logo} alt="loading" className="loading-logo" />
  ) : (
    <section className="main-container">
      {items.map((item, index) => (
        <CardItem key={index} item={item}></CardItem>
      ))}
    </section>
  );
};

export default CardContainer;
