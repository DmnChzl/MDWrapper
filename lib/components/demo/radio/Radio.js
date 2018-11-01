"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("../../../components/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Demo: Radio
 */
var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: {
      margin: '1rem'
    }
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Radio, {
    name: 'animal',
    label: 'Cat',
    checked: true
  }), _react.default.createElement(_ui.Radio, {
    name: 'animal',
    label: 'Dog'
  }))));
};

var _default = Demo;
exports.default = _default;