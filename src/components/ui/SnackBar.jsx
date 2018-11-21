import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, node, string, func } from 'prop-types';
import { MDCSnackbar } from '@material/snackbar/dist/mdc.snackbar';
import '@material/snackbar/dist/mdc.snackbar.css';

const clearFix = {
  borderRadius: 2
};

/**
 * MD Component: SnackBar
 * 
 * @param {Boolean} active Active
 * @param {Boolean} aligned Aligned Style
 * @param {Object} children Node Content
 * @param {String} label Label
 * @param {Function} onClick Click Trigger
 */
class SnackBar extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCSnackbar(this.mdSnackBar);
  }

  render() {
    const { active, aligned, children, label, onClick } = this.props;

    // Class(es)
    const mdcActive = 'mdc-snackbar--active';
    const mdcAlignStart = 'mdc-snackbar--align-start';

    // Attribute(s)
    const attrAriaHidden = !active ? { 'aria-hidden': 'true' } : {};

    return (
      <div
        ref={element => { this.mdSnackBar = element }}
        className={classNames('mdc-snackbar',
          { [mdcActive]: active },
          { [mdcAlignStart]: aligned })}
        aria-live="assertive"
        aria-atomic="true"
        {...attrAriaHidden}
        style={clearFix}>
        <div className="mdc-snackbar__text">
          {children}
        </div>
        <div className="mdc-snackbar__action-wrapper">
          <button
            className="mdc-snackbar__action-button"
            type="button"
            {...attrAriaHidden}
            onClick={() => onClick()}>
            {label}
          </button>
        </div>
      </div>
    );
  }
}

SnackBar.defaultProps = {
  active: false,
  aligned: false,
  label: 'default',
  onClick: () => {}
};

SnackBar.propTypes = {
  active: bool,
  aligned: bool,
  children: node,
  label: string,
  onClick: func
};

export default SnackBar;
