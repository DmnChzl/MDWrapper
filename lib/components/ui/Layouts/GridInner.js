"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("@material/layout-grid/dist/mdc.layout-grid.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * MD Component: GridInner
 * 
 * @param {Node} children Content
 * @param {Object} style Overrides Style
 */
var GridInner = function GridInner(_ref) {
  var children = _ref.children,
      style = _ref.style;
  // Attribute(s)
  var attrStyle = {
    'style': style
  };
  return _react.default.createElement("div", _extends({
    className: "mdc-layout-grid__inner"
  }, attrStyle), children);
};

GridInner.defaultProps = {
  style: {}
};
GridInner.propTypes = {
  children: _propTypes.node,
  style: _propTypes.object
};
var _default = GridInner;
exports.default = _default;