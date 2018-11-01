"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./components/App"));

var _ui = require("./components/ui");

Object.keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_App.default, null)), document.getElementById('root'));