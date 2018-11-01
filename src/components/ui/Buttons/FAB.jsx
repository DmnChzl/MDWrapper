import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { node, string, bool, func } from 'prop-types';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import '@material/fab/dist/mdc.fab.css';

/**
 * MD Component: FAB
 *
 * @param {Node} children Content
 * @param {String} label Label
 * @param {Boolean} mini Mini Style
 * @param {Function} onClick Click Trigger
 */
class FAB extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCRipple(this.mdFab);
  }

  render() {
    const { children, label, mini, onClick } = this.props;

    // Class(es)
    const mdcExtended = 'mdc-fab--extended';
    const mdcMini = 'mdc-fab--mini';

    return (
      <button
        ref={element => { this.mdFab = element }}
        className={classNames('mdc-fab',
          { [mdcExtended]: label },
          { [mdcMini]: mini })}
        onClick={() => onClick()}>
        {children}
        {label &&
          <span className="mdc-fab__label">{label}</span>}
      </button>
    );
  }
}

FAB.defaultProps = {
  mini: false,
  onClick: () => {}
};

FAB.propTypes = {
  children: node,
  label: string,
  mini: bool,
  onClick: func
};

export default FAB;
