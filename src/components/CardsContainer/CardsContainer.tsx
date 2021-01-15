import React from "react";
import "./CardsContainer.scss";

import Cards from "./Cards/Cards";
import Information from "./Information/Information";

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <Cards />
      <Information />
    </div>
  );
};

export default CardsContainer;
