"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: MenuItem
 *
 * @param {String} label Label
 * @param {Function} onClick Click Trigger
 */
var MenuItem = function MenuItem(_ref) {
  var _onClick = _ref.onClick,
      label = _ref.label;
  return label ? _react.default.createElement("li", {
    className: "mdc-list-item",
    role: "menuitem",
    onClick: function onClick() {
      return _onClick(label);
    }
  }, _react.default.createElement("span", {
    className: "mdc-list-item__text"
  }, label)) : _react.default.createElement("li", {
    className: "mdc-list-divider",
    role: "separator"
  });
};

MenuItem.defaultProps = {
  onClick: function onClick() {}
};
MenuItem.propTypes = {
  label: _propTypes.string,
  onClick: _propTypes.func
};
var _default = MenuItem;
exports.default = _default;