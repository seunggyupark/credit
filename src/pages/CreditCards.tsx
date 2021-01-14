import React from 'react';
import './CreditCards.scss';

import CardsContainer from '../components/CardsContainer/CardsContainer';
import { isFunctionOrConstructorTypeNode } from 'typescript';

const CreditCards = () => {
    return (
        <div className="credit-cards">
            <CardsContainer />
        </div>
    );
}

export default CreditCards;
