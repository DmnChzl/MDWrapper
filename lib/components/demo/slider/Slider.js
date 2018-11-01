"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("../../../components/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearFix = {
  margin: '1rem',
  padding: '1rem'
};
/**
 * Demo: Slider
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.Slider, {
    min: 1,
    max: 99,
    value: 25
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.Slider, {
    min: 1,
    max: 99,
    value: 50,
    discrete: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.Slider, {
    min: 1,
    max: 99,
    value: 75,
    discrete: true,
    displayMarkers: true
  }))));
};

var _default = Demo;
exports.default = _default;