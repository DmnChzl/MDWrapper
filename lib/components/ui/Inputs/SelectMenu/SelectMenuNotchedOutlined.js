"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: SelectMenuNotchedOutlined
 *
 * @param {Object} children Node Content
 */
var SelectMenuNotchedOutlined = function SelectMenuNotchedOutlined(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "mdc-notched-outline"
  }, _react.default.createElement("div", {
    className: "mdc-notched-outline__leading"
  }), _react.default.createElement("div", {
    className: "mdc-notched-outline__notch"
  }, children), _react.default.createElement("div", {
    className: "mdc-notched-outline__trailing"
  }));
};

SelectMenuNotchedOutlined.propTypes = {
  children: _propTypes.node
};
var _default = SelectMenuNotchedOutlined;
exports.default = _default;