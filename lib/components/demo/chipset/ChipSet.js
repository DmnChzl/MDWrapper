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
 * Demo: ChipSet
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.ChipSet, {
    choice: true
  }, _react.default.createElement(_ui.Chip, null, "Cat"), _react.default.createElement(_ui.Chip, null, "Dog")))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.ChipSet, {
    choice: true
  }, _react.default.createElement(_ui.Chip, {
    icon: _constants.PETS
  }, "Cat"), _react.default.createElement(_ui.Chip, {
    icon: _constants.PETS
  }, "Dog")))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.ChipSet, {
    choice: true
  }, _react.default.createElement(_ui.Chip, {
    icon: _constants.CANCEL,
    onClick: function onClick() {}
  }, "Cat"), _react.default.createElement(_ui.Chip, {
    icon: _constants.CANCEL,
    onClick: function onClick() {}
  }, "Dog")))));
};

var _default = Demo;
exports.default = _default;