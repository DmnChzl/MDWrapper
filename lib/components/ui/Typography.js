"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = require("prop-types");

require("@material/typography/dist/mdc.typography.css");

/**
 * MD Component: Typography
 * 
 * @param {Node} children Content
 * @param {String} element Element
 * @param {Number} size Size: 1 || 2 || 3 || 4 || 5 || 6
 * @param {String} type Type: 'headline' || 'subtitle' || 'body'
 */
var Typography = function Typography(_ref) {
  var children = _ref.children,
      element = _ref.element,
      type = _ref.type,
      size = _ref.size;
  // Class(es)
  var mdcTypography = type ? "mdc-typography--".concat(type).concat(size) : 'mdc-typography'; // Attribute(s)

  var attrClass = {
    className: [mdcTypography]
  };
  return (0, _react.createElement)(element, attrClass, children);
};

Typography.defaultProps = {
  element: 'span',
  size: 1,
  type: ''
};
Typography.propTypes = {
  children: _propTypes.node.isRequired,
  element: _propTypes.string,
  size: _propTypes.number,
  type: _propTypes.string
};
var _default = Typography;
exports.default = _default;