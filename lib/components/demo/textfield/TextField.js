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
 * Demo: TextField
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    label: 'Classic'
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    label: 'Classic',
    icon: _constants.REPLY
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    label: 'Classic',
    icon: _constants.REPLY,
    trailing: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    label: 'Outlined',
    outlined: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    label: 'Outlined',
    icon: _constants.REPLY_ALL,
    outlined: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    label: 'Outlined',
    icon: _constants.REPLY_ALL,
    outlined: true,
    trailing: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    placeholder: 'Full Width',
    fullWidth: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.TextField, {
    placeholder: 'Full Width',
    fullWidth: true,
    helper: 'Need Help ?'
  }))));
};

var _default = Demo;
exports.default = _default;