import React from 'react';
import { node } from 'prop-types';

/**
 * MD Component: SelectMenuNotchedOutlined
 *
 * @param {Object} children Node Content
 */
const SelectMenuNotchedOutlined = ({ children }) => (
  <div className="mdc-notched-outline">
    <div className="mdc-notched-outline__leading"></div>
    <div className="mdc-notched-outline__notch">
      {children}
    </div>
    <div className="mdc-notched-outline__trailing"></div>
  </div>
);

SelectMenuNotchedOutlined.propTypes = {
  children: node
};

export default SelectMenuNotchedOutlined;
