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
  margin: '1rem',
  padding: '1rem'
};
/**
 * Demo: SelectMenu
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.SelectMenu, {
    label: 'Fruit',
    data: ['Apple', 'Banana', 'Clementine'],
    onClick: function onClick(value) {
      return console.log(value);
    }
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.SelectMenu, {
    label: 'Hue',
    data: ['Red', 'Green', 'Blue'],
    onClick: function onClick(value) {
      return console.log(value);
    },
    outlined: true
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.SelectMenu, {
    label: 'Fruit',
    data: ['Apple', 'Banana', 'Clementine'],
    helper: 'Need Help ?',
    onClick: function onClick(value) {
      return console.log(value);
    }
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 6
  }, _react.default.createElement(_ui.SelectMenu, {
    label: 'Hue',
    data: ['Red', 'Green', 'Blue'],
    icon: _constants.BRUSH,
    onClick: function onClick(value) {
      return console.log(value);
    },
    outlined: true
  }))));
};

var _default = Demo;
exports.default = _default;