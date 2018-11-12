"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("../../../components/ui");

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mdcIcon = 'mdc-button__icon';
/**
 * Demo: ThemeProvider
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    col: 3
  }, _react.default.createElement(_ui.ThemeProvider, {
    primary: '#ff9800'
  }, _react.default.createElement(_ui.Button, {
    outlined: true
  }, "Orange"))), _react.default.createElement(_ui.GridCell, {
    col: 3
  }, _react.default.createElement(_ui.ThemeProvider, {
    primary: '#03a9f4',
    onPrimary: '#424242'
  }, _react.default.createElement(_ui.Button, {
    raised: true
  }, "Light Blue"))), _react.default.createElement(_ui.GridCell, {
    col: 3
  }, _react.default.createElement(_ui.ThemeProvider, {
    primary: '#f44336'
  }, _react.default.createElement(_ui.Button, {
    outlined: true
  }, _react.default.createElement(_ui.Icon, {
    font: _constants.BRUSH,
    classes: [mdcIcon]
  }), "Red"))), _react.default.createElement(_ui.GridCell, {
    col: 3
  }, _react.default.createElement(_ui.ThemeProvider, {
    primary: '#8bc34a',
    onPrimary: '#424242'
  }, _react.default.createElement(_ui.Button, {
    raised: true
  }, _react.default.createElement(_ui.Icon, {
    font: _constants.BRUSH,
    classes: [mdcIcon]
  }), "Light Green")))));
};

var _default = Demo;
exports.default = _default;