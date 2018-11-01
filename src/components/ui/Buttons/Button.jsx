import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { array, bool, node, func } from 'prop-types';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import '@material/button/dist/mdc.button.css';

/**
 * MD Component: Button
 *
 * @param {Array} classes Overrides Class
 * @param {Node} children Content
 * @param {Boolean} dense Dense Style
 * @param {Boolean} disabled Available State
 * @param {Function} onClick Click Trigger
 * @param {Boolean} outlined Outlined Style
 * @param {Boolean} raised Raised Style
 * @param {Boolean} unelevated Unelevated Style
 */
class Button extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCRipple(this.mdButton);
  }

  render() {
    const { classes, children, dense, disabled, onClick, outlined, raised, unelevated } = this.props;

    // Class(es)
    const mdcDense = 'mdc-button--dense';
    const mdcOutlined = 'mdc-button--outlined';
    const mdcRaised = 'mdc-button--raised';
    const mdcUnelevated = 'mdc-button--unelevated';

    return (
      <button
        ref={element => { this.mdButton = element }}
        className={classNames('mdc-button',
          { [mdcDense]: dense },
          { [mdcOutlined]: outlined },
          { [mdcRaised]: raised },
          { [mdcUnelevated]: unelevated },
          ...classes)}
        onClick={() => onClick()}
        disabled={disabled}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  classes: [],
  dense: false,
  disabled: false,
  onClick: () => {},
  outlined: false,
  raised: false,
  unelevated: false
};

Button.propTypes = {
  classes: array,
  children: node,
  dense: bool,
  disabled: bool,
  onClick: func,
  outlined: bool,
  raised: bool,
  unelevated: bool
};

export default Button;
