import React from 'react';
import { node, object } from 'prop-types';
import '@material/layout-grid/dist/mdc.layout-grid.css';

/**
 * MD Component: GridInner
 * 
 * @param {Object} children Node Content
 * @param {Object} style Overrides Style
 */
const GridInner = ({ children, style }) => {
  // Attribute(s)
  const attrStyle = { 'style' : style };

  return (
    <div className="mdc-layout-grid__inner" {...attrStyle}>
      {children}
    </div>
  );
};

GridInner.defaultProps = {
  style: {}
};

GridInner.propTypes = {
  children: node,
  style: object
};

export default GridInner;
