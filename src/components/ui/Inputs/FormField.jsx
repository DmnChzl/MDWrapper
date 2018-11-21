import React from 'react';
import { node, object } from 'prop-types';
import '@material/form-field/dist/mdc.form-field.css';

/**
 * MD Component: FormField
 *
 * @param {Object} children Node Content
 * @param {Object} style Overrides Style
 */
const FormField = ({ children, style }) => {
  // Attribute(s)
  const attrStyle = { 'style': style };

  return (
    <div
      className="mdc-form-field"
      {...attrStyle}>
      {children}
    </div>
  );
};

FormField.defaultProps = {
  style: {}
};

FormField.propTypes = {
  children: node,
  style: object
};

export default FormField;
