import React from 'react';
import { node } from 'prop-types';
import '@material/card/dist/mdc.card.css';

/**
 * MD Component: CardActionButtons
 *
 * @param {Node} children Content
 */
const CardActionButton = ({ children }) => (
  <div className="mdc-card__action-buttons">
    {children}
  </div>
);

CardActionButton.propTypes = {
  children: node
};

export default CardActionButton;
