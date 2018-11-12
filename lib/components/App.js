"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("./ui");

var _Header = _interopRequireDefault(require("./Header"));

var _Router = _interopRequireDefault(require("./Router"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INDIGO = '#3f51b5';
var RED = '#f44336';

var getTabs = function getTabs() {
  return ['Button', 'Card', 'CheckBox', 'ChipSet', 'FAB', 'Icon', 'Icon Button', 'Icon Toggle', 'Layout', 'Linear Progress', 'Radio', 'Slider', 'SnackBar', 'Switch', 'TextField', 'Theme Provider', 'Typography'];
};

var App = function App() {
  return _react.default.createElement(_ui.ThemeProvider, {
    onSecondary: _constants.WHITE,
    primary: INDIGO,
    secondary: RED
  }, _react.default.createElement(_Header.default, {
    tabs: getTabs()
  }), _react.default.createElement(_Router.default, null));
};

var _default = App;
exports.default = _default;