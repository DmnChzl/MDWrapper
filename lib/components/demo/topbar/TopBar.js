"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("../../../components/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Demo: TopBar
 */
var Demo = function Demo() {
  return _react.default.createElement(_ui.TopBar, {
    title: "Menu",
    onClick: function onClick() {
      return console.log('Menu');
    }
  }, _react.default.createElement(_ui.TopBarIcon, {
    font: "file_download",
    onClick: function onClick() {
      return console.log('File Download');
    }
  }));
};

var _default = Demo;
exports.default = _default;