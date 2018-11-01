import React from 'react';
import classNames from 'classnames';
import { node, string, object } from 'prop-types';
import '@material/layout-grid/dist/mdc.layout-grid.css';

/**
 * MD Component: Grid
 * 
 * @param {Node} children Content
 * @param {String} hAlign Horizontal Alignment: 'left' || 'right'
 * @param {Object} style Overrides Style
 */
const Grid = ({ children, hAlign, style }) => {
  // Class(es)
  const mdcAlign = position => `mdc-layout-grid--align-${position}`;

  // Attribute(s)
  const attrStyle = { 'style' : style };

  return (
    <div
      className={classNames('mdc-layout-grid',
        { [mdcAlign(hAlign)]: hAlign })}
      {...attrStyle}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  style: {}
};

Grid.propTypes = {
  children: node,
  hAlign: string,
  style: object
};

export default Grid;
