import React from 'react';
import classNames from 'classnames';
import { node, number, object, string } from 'prop-types';
import '@material/layout-grid/dist/mdc.layout-grid.css';

/**
 * MD Component: GridCell
 * 
 * @param {Node} children Content
 * @param {Number} col Bootstrap Columns
 * @param {Object} style Overrides Style
 * @param {String} vAlign Vertical Alignment: 'top' || 'middle' || 'bottom'
 */
const GridCell = ({ children, col, style, vAlign }) => {
  // Class(es)
  const mdcAlign = position => `mdc-layout-grid__cell--align-${position}`;

  // Attribute(s)
  const attrStyle = { 'style' : style };

  return (
    <div
      className={classNames(`mdc-layout-grid__cell--span-${col}`,
        { [mdcAlign(vAlign)]: vAlign })}
      {...attrStyle}>
      {children}
    </div>
  );
};

GridCell.defaultProps = {
  col: 4,
  style: {}
};

GridCell.propTypes = {
  children: node,
  col: number,
  style: object,
  vAlign: string
};

export default GridCell;
