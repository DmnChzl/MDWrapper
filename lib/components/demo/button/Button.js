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
var mdcIcon = 'mdc-button__icon';
/**
 * Demo: Button
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, null, "Flat")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    dense: true
  }, "Dense")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, null, _react.default.createElement(_ui.Icon, {
    font: _constants.DONE,
    classes: [mdcIcon]
  }), "Flat"))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    raised: true
  }, "Raised")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    raised: true,
    dense: true
  }, "Dense")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    raised: true
  }, _react.default.createElement(_ui.Icon, {
    font: _constants.DONE_ALL,
    classes: [mdcIcon]
  }), "Raised"))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    outlined: true
  }, "Outlined")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    outlined: true,
    dense: true
  }, "Dense")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    outlined: true
  }, _react.default.createElement(_ui.Icon, {
    font: _constants.DONE_OUTLINE,
    classes: [mdcIcon]
  }), "Outlined"))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    unelevated: true
  }, "Unelevated")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    unelevated: true,
    dense: true
  }, "Dense")), _react.default.createElement(_ui.GridCell, null, _react.default.createElement(_ui.Button, {
    unelevated: true
  }, _react.default.createElement(_ui.Icon, {
    font: _constants.DONE_ALL,
    classes: [mdcIcon]
  }), "Unelevated"))));
};

var _default = Demo;
exports.default = _default;