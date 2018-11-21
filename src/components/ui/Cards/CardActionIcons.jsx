import React from 'react';
import { node } from 'prop-types';
import '@material/card/dist/mdc.card.css';

/**
 * MD Component: CardActionIcons
 *
 * @param {Object} children Node Content
 */
const CardActionIcons = ({ children }) => (
  <div className="mdc-card__action-icons">
    {children}
  </div>
);

CardActionIcons.propTypes = {
  children: node
};

export default CardActionIcons;
