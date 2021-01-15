import React, { useState, useEffect } from "react";
import "./CreditCards.scss";

import CardsContainer from "../components/CardsContainer/CardsContainer";

const CreditCards = () => {
  return (
    <div className="credit-cards">
      <CardsContainer />
    </div>
  );
};

export default CreditCards;
