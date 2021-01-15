import React from "react";
import "./Card.scss";

interface CardProps {
  card: {
    number: number;
    bank: string;
    exp: string;
    balance: number;
  };
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div>{props.card.bank}</div>
      <div>**** **** **** {props.card.number}</div>
      <div>Valid Thru: {props.card.exp}</div>
    </div>
  );
};

export default Card;
