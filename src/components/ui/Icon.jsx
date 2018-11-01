import React from 'react';
import classNames from 'classnames';
import { array, string } from 'prop-types';
import { STARS } from '../../constants';

/**
 * MD Component: Icon
 *
 * @param {Array} classes Overrides Class
 * @param {String} font Material Design Icon Font
 */
const Icon = ({ classes, font }) => (
  <i className={classNames('material-icons', ...classes)}>
    {font}
  </i>
);

Icon.defaultProps = {
  classes: [],
  font: STARS
};

Icon.propTypes = {
  classes: array,
  font: string
};

export default Icon;
