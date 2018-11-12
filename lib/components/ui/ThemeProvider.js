"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _constants = require("../../constants");

require("@material/theme/dist/mdc.theme.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR = '#b00020';
var PRIMARY = '#6200ee';
var SECONDARY = '#018786';
/**
 * MD Component: ThemeProvider
 * 
 * @param {String} background BackGround Color
 * @param {Node} children Content
 * @param {String} error Error Color
 * @param {String} onError On Error Color
 * @param {String} onPrimary On Primary Color
 * @param {String} onSecondary On Secondary Color
 * @param {String} onSurface On Surface Color
 * @param {String} primary Primary Color
 * @param {String} secondary Secondary Color
 * @param {String} surface Surface Color
 */

var ThemeProvider = function ThemeProvider(_ref) {
  var background = _ref.background,
      children = _ref.children,
      error = _ref.error,
      onError = _ref.onError,
      onPrimary = _ref.onPrimary,
      onSecondary = _ref.onSecondary,
      onSurface = _ref.onSurface,
      primary = _ref.primary,
      secondary = _ref.secondary,
      surface = _ref.surface;
  // Attribute(s)
  var attrStyle = {
    'style': {
      '--mdc-theme-background': background,
      '--mdc-theme-error': error,
      '--mdc-theme-on-error': onError,
      '--mdc-theme-on-primary': onPrimary,
      '--mdc-theme-on-secondary': onSecondary,
      '--mdc-theme-on-surface': onSurface,
      '--mdc-theme-primary': primary,
      '--mdc-theme-secondary': secondary,
      '--mdc-theme-surface': surface
    }
  };
  return _react.default.createElement("div", attrStyle, children);
};

ThemeProvider.defaultProps = {
  background: _constants.WHITE,
  error: ERROR,
  onError: _constants.WHITE,
  onPrimary: _constants.WHITE,
  onSecondary: _constants.BLACK,
  onSurface: _constants.BLACK,
  primary: PRIMARY,
  secondary: SECONDARY,
  surface: _constants.WHITE
};
ThemeProvider.propTypes = {
  background: _propTypes.string,
  children: _propTypes.node,
  error: _propTypes.string,
  onError: _propTypes.string,
  onPrimary: _propTypes.string,
  onSecondary: _propTypes.string,
  onSurface: _propTypes.string,
  primary: _propTypes.string,
  secondary: _propTypes.string,
  surface: _propTypes.string
};
var _default = ThemeProvider;
exports.default = _default;