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
var mdcIcon = 'mdc-fab__icon';
/**
 * Demo: FAB
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.FAB, null, _react.default.createElement(_ui.Icon, {
    classes: [mdcIcon],
    font: _constants.CREATE
  })))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.FAB, {
    label: 'Create'
  }, _react.default.createElement(_ui.Icon, {
    classes: [mdcIcon],
    font: _constants.CREATE
  })))));
};

var _default = Demo;
exports.default = _default;