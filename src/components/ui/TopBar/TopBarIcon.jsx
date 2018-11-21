import React from 'react';
import { string, func } from 'prop-types';
import { BOOKMARK } from '../../../constants';

/**
 * MD Component: TopBarIcon
 *
 * @param {String} font Material Design Icon Font
 * @param {Function} onClick Click Trigger
 */
const TopBarIcon = ({ font, onClick }) => (
  <button className="material-icons mdc-top-app-bar__action-item" onClick={() => onClick()}>
    {font}
  </button>
);

TopBarIcon.defaultProps = {
  font: BOOKMARK,
  onClick: () => {}
};

TopBarIcon.propTypes = {
  font: string,
  onClick: func
};

export default TopBarIcon;
