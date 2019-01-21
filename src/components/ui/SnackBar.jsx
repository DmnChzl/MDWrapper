import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { bool, node, string, func } from 'prop-types';
import { MDCSnackbar } from '@material/snackbar/dist/mdc.snackbar';
import '@material/snackbar/dist/mdc.snackbar.css';

/**
 * MD Component: SnackBar
 *
 * @param {Object} children Node Content
 * @param {String} label Label
 * @param {Boolean} leading Leading Style
 * @param {Function} onClick Click Trigger
 * @param {Boolean} open Open
 * @param {Boolean} stacked Stacked Style
 */
class SnackBar extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCSnackbar(this.mdSnackBar);
  }

  componentDidUpdate() {
    const { open } = this.props;

    if (open) {
      this.mdComponent.open();
    }
  }

  render() {
    const { children, label, leading, onClick, stacked } = this.props;

    // Class(es)
    const mdcLeading = 'mdc-snackbar--leading';
    const mdcStacked = 'mdc-snackbar--stacked';

    return (
      <div
        ref={element => { this.mdSnackBar = element }}
        className={classNames('mdc-snackbar',
          { [mdcLeading]: leading },
          { [mdcStacked]: stacked && !leading })}>
        <div className="mdc-snackbar__surface">
          <div
            className="mdc-snackbar__label"
            role="status"
            aria-live="polite">
            {children}
          </div>
          <div className="mdc-snackbar__actions">
            <button
              className="mdc-button mdc-snackbar__action"
              type="button"
              onClick={() => onClick()}>
              {label}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

SnackBar.defaultProps = {
  label: 'default',
  leading: false,
  onClick: () => {},
  open: false,
  stacked: false
};

SnackBar.propTypes = {
  children: node,
  label: string,
  leading: bool,
  onClick: func,
  open: bool,
  stacked: bool
};

export default SnackBar;
