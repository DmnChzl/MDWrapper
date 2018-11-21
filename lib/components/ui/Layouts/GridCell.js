"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

require("@material/layout-grid/dist/mdc.layout-grid.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * MD Component: GridCell
 * 
 * @param {Object} children Node Content
 * @param {Number} col Bootstrap Columns
 * @param {Object} style Overrides Style
 * @param {String} vAlign Vertical Alignment: 'top' || 'middle' || 'bottom'
 */
var GridCell = function GridCell(_ref) {
  var children = _ref.children,
      col = _ref.col,
      style = _ref.style,
      vAlign = _ref.vAlign;

  // Class(es)
  var mdcAlign = function mdcAlign(position) {
    return "mdc-layout-grid__cell--align-".concat(position);
  }; // Attribute(s)


  var attrStyle = {
    'style': style
  };
  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)("mdc-layout-grid__cell--span-".concat(col), _defineProperty({}, mdcAlign(vAlign), vAlign))
  }, attrStyle), children);
};

GridCell.defaultProps = {
  col: 4,
  style: {}
};
GridCell.propTypes = {
  children: _propTypes.node,
  col: _propTypes.number,
  style: _propTypes.object,
  vAlign: _propTypes.string
};
var _default = GridCell;
exports.default = _default;