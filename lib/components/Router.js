"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _demo = require("./demo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router() {
  return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _demo.Button
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/button",
    component: _demo.Button
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/card",
    component: _demo.Card
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/chipset",
    component: _demo.ChipSet
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/checkbox",
    component: _demo.CheckBox
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/fab",
    component: _demo.FAB
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/icon",
    component: _demo.Icon
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/icon_button",
    component: _demo.IconButton
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/icon_toggle",
    component: _demo.IconToggle
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/layout",
    component: _demo.Layout
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/linear_progress",
    component: _demo.LinearProgress
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/radio",
    component: _demo.Radio
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/slider",
    component: _demo.Slider
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/snackbar",
    component: _demo.SnackBar
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/switch",
    component: _demo.Switch
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/textfield",
    component: _demo.TextField
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/theme_provider",
    component: _demo.ThemeProvider
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/typography",
    component: _demo.Typography
  }));
};

var _default = Router;
exports.default = _default;