import React from 'react';
import { string, func } from 'prop-types';

const clearFix = {
  cursor: 'pointer'
};

/**
 * MD Component: ListItem
 *
 * @param {String} leadingIcon Material Design Leading Icon
 * @param {Function} onClick Click Trigger
 * @param {String} subTitle SubTitle
 * @param {String} title Title
 * @param {String} trailingIcon Material Design Trailing Icon
 */
const ListItem = ({ leadingIcon, onClick, subTitle, title, trailingIcon }) => title ? (
  <li
    className="mdc-list-item" 
    role="option"
    onClick={() => onClick({ leadingIcon, title, subTitle, trailingIcon })}
    style={clearFix}>
    {leadingIcon &&
      <span className="mdc-list-item__graphic material-icons">{leadingIcon}</span>}
    {!subTitle &&
      <span className="mdc-list-item__text">{title}</span>}
    {subTitle &&
      <span className="mdc-list-item__text">
        <span className="mdc-list-item__primary-text">{title}</span>
        <span className="mdc-list-item__secondary-text">{subTitle}</span>
      </span>}
    {trailingIcon &&
      <span className="mdc-list-item__meta material-icons">{trailingIcon}</span>}
  </li>
) : <li className="mdc-list-divider" role="separator"></li>;

ListItem.defaultProps = {
  onClick: () => {}
};

ListItem.propTypes = {
  leadingIcon: string,
  onClick: func,
  subTitle: string,
  title: string,
  trailingIcon: string
};

export default ListItem;
