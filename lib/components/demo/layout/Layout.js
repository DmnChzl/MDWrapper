"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("../../../components/ui");

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearFix = {
  backgroundColor: '#e0e0e0',
  borderRadius: 4,
  padding: '1rem'
};
/**
 * Demo: Layout
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, {
    style: {
      backgroundColor: '#f5f5f5',
      borderRadius: 4,
      margin: '1rem'
    }
  }, _react.default.createElement(_ui.GridInner, {
    style: {
      height: 200
    }
  }, _react.default.createElement(_ui.GridCell, {
    style: clearFix,
    vAlign: _constants.TOP
  }, _react.default.createElement(_ui.Typography, null, "--span-4")), _react.default.createElement(_ui.GridCell, {
    vAlign: _constants.MIDDLE
  }, _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    col: 6,
    style: clearFix
  }, _react.default.createElement(_ui.Typography, null, "--span-6")), _react.default.createElement(_ui.GridCell, {
    col: 6,
    style: clearFix
  }, _react.default.createElement(_ui.Typography, null, "--span-6")))), _react.default.createElement(_ui.GridCell, {
    vAlign: _constants.BOTTOM
  }, _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    col: 3,
    style: clearFix
  }, _react.default.createElement(_ui.Typography, null, "--span-3")), _react.default.createElement(_ui.GridCell, {
    col: 3,
    style: clearFix
  }, _react.default.createElement(_ui.Typography, null, "--span-3")), _react.default.createElement(_ui.GridCell, {
    col: 3,
    style: clearFix
  }, _react.default.createElement(_ui.Typography, null, "--span-3")), _react.default.createElement(_ui.GridCell, {
    col: 3,
    style: clearFix
  }, _react.default.createElement(_ui.Typography, null, "--span-3"))))));
};

var _default = Demo;
exports.default = _default;