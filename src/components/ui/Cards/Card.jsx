import React from 'react';
import { node } from 'prop-types';
import '@material/card/dist/mdc.card.css';

/**
 * MD Component: Card
 *
 * @param {Node} children Content
 */
const Card = ({ children }) => (
  <div className="mdc-card">
    {children}
  </div>
);

Card.propTypes = {
  children: node
};

export default Card;
