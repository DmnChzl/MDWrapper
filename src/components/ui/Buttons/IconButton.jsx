import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { array, bool, string, func } from 'prop-types';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import { STAR } from '../../../constants';
import '@material/icon-button/dist/mdc.icon-button.css';

/**
 * MD Component: IconButton
 *
 * @param {Array} classes Overrides Class
 * @param {Boolean} disabled Available State
 * @param {String} font Material Design Icon Font
 * @param {Function} onClick Click Trigger
 */
class IconButton extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCRipple(this.mdIconButton);
    this.mdComponent.unbounded = true;
  }

  render() {
    const { classes, disabled, font, onClick } = this.props;

    return (
      <button
        ref={element => { this.mdIconButton = element }}
        className={classNames('material-icons',
          'mdc-icon-button',
          ...classes)}
        onClick={() => onClick()}
        disabled={disabled}>
        {font}
      </button>
    );
  }
}

IconButton.defaultProps = {
  classes: [],
  disabled: false,
  font: STAR,
  onClick: () => {}
};

IconButton.propTypes = {
  classes: array,
  disabled: bool,
  font: string,
  onClick: func
};

export default IconButton;
