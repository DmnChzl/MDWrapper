import React from 'react';
import { node, string, func} from 'prop-types';
import Icon from '../Icon';
import ChipIconTrailing from './ChipIconTrailing';
import '@material/chips/dist/mdc.chips.css';

/**
 * MD Component: Chip
 *
 * @param {Node} children Content
 * @param {String} icon Material Design Icon
 * @param {Function} onClick Click Trigger
 */
const Chip = ({ children, icon, onClick }) => {
  // Class(es)
  const mdcIcon = 'mdc-chip__icon';
  const mdcIconLeading = 'mdc-chip__icon--leading';

  return (
    <div className="mdc-chip" tabIndex={0}>
      {icon && !onClick &&
        <Icon classes={[mdcIcon, mdcIconLeading]}>{icon}</Icon>}
      <div className="mdc-chip__text">
        {children}
      </div>
      {icon && onClick &&
        <ChipIconTrailing
          font={icon}
          onClick={onClick} />}
    </div>
  )
};

Chip.propTypes = {
  children: node,
  icon: string,
  onClick: func
}

export default Chip;
