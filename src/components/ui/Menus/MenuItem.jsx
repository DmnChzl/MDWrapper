import React from 'react';
import { string, func } from 'prop-types';

/**
 * MD Component: MenuItem
 *
 * @param {String} label Label
 * @param {Function} onClick Click Trigger
 */
const MenuItem = ({ onClick, label }) => label ? (
  <li className="mdc-list-item" role="menuitem" onClick={() => onClick(label)}>
    <span className="mdc-list-item__text">{label}</span>
  </li>
): <li className="mdc-list-divider" role="separator"></li>;

MenuItem.defaultProps = {
  onClick: () => {}
};

MenuItem.propTypes = {
  label: string,
  onClick: func
};

export default MenuItem;
