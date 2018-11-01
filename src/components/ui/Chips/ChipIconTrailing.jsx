import React from 'react';
import { string, func} from 'prop-types';
import { CANCEL } from '../../../constants';
import '@material/chips/dist/mdc.chips.css';

/**
 * MD Component: ChipIconTrailing
 *
 * @param {String} font Material Design Icon Font
 * @param {Function} onClick Click Trigger
 */
const ChipIconTrailing = ({ font, onClick }) => (
  <i
    className="material-icons mdc-chip__icon mdc-chip__icon--trailing"
    role="button"
    onClick={() => onClick()}
    tabIndex={0}>
    {font}
  </i>
);

ChipIconTrailing.defaultProps = {
  font: CANCEL,
  onClick: () => {}
};

ChipIconTrailing.propTypes = {
  font: string,
  onClick: func
};

export default ChipIconTrailing;
