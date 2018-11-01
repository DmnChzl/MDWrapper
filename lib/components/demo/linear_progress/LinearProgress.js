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
 * Demo: LinearProgress
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.LinearProgress, {
    value: 25
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.LinearProgress, {
    value: 75,
    reversed: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.LinearProgress, {
    indeterminate: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.LinearProgress, {
    value: 25,
    buffered: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.LinearProgress, {
    value: 75,
    buffered: true,
    reversed: true
  }))));
};

var _default = Demo;
exports.default = _default;