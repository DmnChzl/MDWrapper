import React, { PureComponent } from 'react';
import { node, bool, string } from 'prop-types';
import { MDCDialog } from '@material/dialog/dist/mdc.dialog';
import '@material/dialog/dist/mdc.dialog.css';

/**
 * MD Component: Dialog
 * 
 * @param {Object} children Node Content
 * @param {Boolean} open Open
 * @param {String} title Title
 */
class Dialog extends PureComponent {
  componentDidMount() {
    this.mdComponent = new MDCDialog(this.mdDialog);
  }

  componentDidUpdate() {
    const { open } = this.props;

    open ? this.mdComponent.open() : this.mdComponent.close();
  }

  render() {
    const { children, title } = this.props;

    return (
      <div
        ref={element => { this.mdDialog = element }}
        className="mdc-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="my-dialog-title"
        aria-describedby="my-dialog-content">
        <div className="mdc-dialog__container">
          <div className="mdc-dialog__surface">
            <h2 className="mdc-dialog__title" id="my-dialog-title">{title}</h2>
            {children}
          </div>
        </div>
        <div className="mdc-dialog__scrim"></div>
      </div>
    );
  }
}

Dialog.defaultProps = {
  open: false,
  title: 'Default'
};

Dialog.propTypes = {
  children: node,
  open: bool,
  title: string
};

export default Dialog;
