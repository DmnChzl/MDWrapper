"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("@material/form-field/dist/mdc.form-field.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * MD Component: FormField
 *
 * @param {Object} children Node Content
 * @param {Object} style Overrides Style
 */
var FormField = function FormField(_ref) {
  var children = _ref.children,
      style = _ref.style;
  // Attribute(s)
  var attrStyle = {
    'style': style
  };
  return _react.default.createElement("div", _extends({
    className: "mdc-form-field"
  }, attrStyle), children);
};

FormField.defaultProps = {
  style: {}
};
FormField.propTypes = {
  children: _propTypes.node,
  style: _propTypes.object
};
var _default = FormField;
exports.default = _default;