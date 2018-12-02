import React from 'react';
import { node } from 'prop-types';
import '@material/dialog/dist/mdc.dialog.css';

/**
 * MD Component: DialogActions
 *
 * @param {Object} children Node Content
 */
const DialogActions = ({ children }) => (
  <footer className="mdc-dialog__actions">
    {children}
  </footer>
);

DialogActions.propTypes = {
  children: node
};

export default DialogActions;
