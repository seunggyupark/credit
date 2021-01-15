import React from "react";
import "./Cards.scss";
import { useSelector } from "react-redux";

import Card from "./Card";
import Heading from "./Heading";

import { data } from "../../../data/data";

const Cards = () => {
  // const cards = useSelector(state => state.cards.items)

  return (
    <div className="cards">
      <div className="cards__container">
        <Heading />
        {data.map((element, index) => (
          <Card card={element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
