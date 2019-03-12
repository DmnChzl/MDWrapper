import React from 'react';
import { node } from 'prop-types';

/**
 * MD Component: NotchedOutline
 *
 * @param {Object} children Node Content
 */
const NotchedOutline = ({ children }) => (
  <div className="mdc-notched-outline">
    <div className="mdc-notched-outline__leading"></div>
    <div className="mdc-notched-outline__notch">
      {children}
    </div>
    <div className="mdc-notched-outline__trailing"></div>
  </div>
);

NotchedOutline.propTypes = {
  children: node
};

export default NotchedOutline;
