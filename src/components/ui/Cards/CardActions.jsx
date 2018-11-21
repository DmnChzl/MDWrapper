import React from 'react';
import { node } from 'prop-types';
import '@material/card/dist/mdc.card.css';

/**
 * MD Component: CardActions
 *
 * @param {Object} children Node Content
 */
const CardActions = ({ children }) => (
  <div className="mdc-card__actions">
    {children}
  </div>
);

CardActions.propTypes = {
  children: node
};

export default CardActions;
