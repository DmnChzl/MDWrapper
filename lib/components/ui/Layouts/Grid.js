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
 * MD Component: Grid
 * 
 * @param {Object} children Node Content
 * @param {String} hAlign Horizontal Alignment: 'left' || 'right'
 * @param {Object} style Overrides Style
 */
var Grid = function Grid(_ref) {
  var children = _ref.children,
      hAlign = _ref.hAlign,
      style = _ref.style;

  // Class(es)
  var mdcAlign = function mdcAlign(position) {
    return "mdc-layout-grid--align-".concat(position);
  }; // Attribute(s)


  var attrStyle = {
    'style': style
  };
  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('mdc-layout-grid', _defineProperty({}, mdcAlign(hAlign), hAlign))
  }, attrStyle), children);
};

Grid.defaultProps = {
  style: {}
};
Grid.propTypes = {
  children: _propTypes.node,
  hAlign: _propTypes.string,
  style: _propTypes.object
};
var _default = Grid;
exports.default = _default;