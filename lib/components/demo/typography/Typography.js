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
  margin: '1rem'
};
/**
 * Demo: Typography
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 1
  }, "Headline 1"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 2
  }, "Headline 2"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 3
  }, "Headline 3"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 4
  }, "Headline 4"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 5
  }, "Headline 5"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 6
  }, "Headline 6"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.SUBTITLE,
    size: 1
  }, "SubTitle 1"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.SUBTITLE,
    size: 2
  }, "SubTitle 2"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.BODY,
    size: 1
  }, "Body 1"))), _react.default.createElement(_ui.GridInner, null, _react.default.createElement(_ui.GridCell, {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.BODY,
    size: 2
  }, "Body 2"))));
};

var _default = Demo;
exports.default = _default;