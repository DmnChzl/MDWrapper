import React from 'react';
import { node } from 'prop-types';
import '@material/card/dist/mdc.card.css';

/**
 * MD Component: CardActionButtons
 *
 * @param {Object} children Node Content
 */
const CardActionButtons = ({ children }) => (
  <div className="mdc-card__action-buttons">
    {children}
  </div>
);

CardActionButtons.propTypes = {
  children: node
};

export default CardActionButtons;
