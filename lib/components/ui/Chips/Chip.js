"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _Icon = _interopRequireDefault(require("../Icon"));

var _ChipIconTrailing = _interopRequireDefault(require("./ChipIconTrailing"));

require("@material/chips/dist/mdc.chips.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: Chip
 *
 * @param {Object} children Node Content
 * @param {String} icon Material Design Icon
 * @param {Function} onClick Click Trigger
 */
var Chip = function Chip(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      onClick = _ref.onClick;
  // Class(es)
  var mdcIcon = 'mdc-chip__icon';
  var mdcIconLeading = 'mdc-chip__icon--leading';
  return _react.default.createElement("div", {
    className: "mdc-chip",
    tabIndex: 0
  }, icon && !onClick && _react.default.createElement(_Icon.default, {
    classes: [mdcIcon, mdcIconLeading]
  }, icon), _react.default.createElement("div", {
    className: "mdc-chip__text"
  }, children), icon && onClick && _react.default.createElement(_ChipIconTrailing.default, {
    font: icon,
    onClick: onClick
  }));
};

Chip.propTypes = {
  children: _propTypes.node,
  icon: _propTypes.string,
  onClick: _propTypes.func
};
var _default = Chip;
exports.default = _default;