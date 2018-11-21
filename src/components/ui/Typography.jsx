import { createElement } from 'react';
import { node, string, number } from 'prop-types';
import '@material/typography/dist/mdc.typography.css';

/**
 * MD Component: Typography
 * 
 * @param {Object} children Node Content
 * @param {String} element Element
 * @param {Number} size Size: 1 || 2 || 3 || 4 || 5 || 6
 * @param {String} type Type: 'headline' || 'subtitle' || 'body'
 */
const Typography = ({ children, element, type, size }) => {
  // Class(es)
  const mdcTypography = type ? `mdc-typography--${type}${size}` : 'mdc-typography';

  // Attribute(s)
  const attrClass = { className: [mdcTypography] };

  return createElement(
    element,
    attrClass,
    children
  )
};

Typography.defaultProps = {
  element: 'span',
  size: 1,
  type: ''
};

Typography.propTypes = {
  children: node.isRequired,
  element: string,
  size: number,
  type: string
};

export default Typography;
