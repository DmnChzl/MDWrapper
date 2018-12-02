import React from 'react';
import { node } from 'prop-types';
import '@material/dialog/dist/mdc.dialog.css';

/**
 * MD Component: DialogContent
 *
 * @param {Object} children Node Content
 */
const DialogContent = ({ children }) => (
  <div className="mdc-dialog__content">
    {children}
  </div>
);

DialogContent.propTypes = {
  children: node
};

export default DialogContent;
