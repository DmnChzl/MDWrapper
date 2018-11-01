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
  padding: '1rem'
};
var mdcAction = 'mdc-card__action';
var mdcActionButton = 'mdc-card__action--button';
var mdcActionIcon = 'mdc-card__action--icon';
/**
 * Demo: Card
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: {
      margin: '1rem'
    }
  }, _react.default.createElement(_ui.GridCell, {
    col: 3
  }, _react.default.createElement(_ui.Card, null, _react.default.createElement("div", {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 6
  }, "Title"), _react.default.createElement(_ui.Typography, {
    element: 'p',
    type: _constants.SUBTITLE,
    size: 2
  }, "SubTitle")), _react.default.createElement("div", {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.BODY,
    size: 2
  }, "Lorem Ipsum Dolor Sit Amet")))), _react.default.createElement(_ui.GridCell, {
    col: 1
  }), _react.default.createElement(_ui.GridCell, {
    col: 3
  }, _react.default.createElement(_ui.Card, null, _react.default.createElement("div", {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 6
  }, "Title"), _react.default.createElement(_ui.Typography, {
    element: 'p',
    type: _constants.SUBTITLE,
    size: 2
  }, "SubTitle")), _react.default.createElement("div", {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.BODY,
    size: 2
  }, "Lorem Ipsum Dolor Sit Amet")), _react.default.createElement(_ui.CardActions, null, _react.default.createElement(_ui.CardActionButtons, null, _react.default.createElement(_ui.Button, {
    classes: [mdcAction, mdcActionButton]
  }, "Done"), _react.default.createElement(_ui.Button, {
    classes: [mdcAction, mdcActionButton]
  }, "Done All"))))), _react.default.createElement(_ui.GridCell, {
    col: 1
  }), _react.default.createElement(_ui.GridCell, {
    col: 3
  }, _react.default.createElement(_ui.Card, null, _react.default.createElement("div", {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.HEADLINE,
    size: 6
  }, "Title"), _react.default.createElement(_ui.Typography, {
    element: 'p',
    type: _constants.SUBTITLE,
    size: 2
  }, "SubTitle")), _react.default.createElement("div", {
    style: clearFix
  }, _react.default.createElement(_ui.Typography, {
    type: _constants.BODY,
    size: 2
  }, "Lorem Ipsum Dolor Sit Amet")), _react.default.createElement(_ui.CardActions, null, _react.default.createElement(_ui.CardActionButtons, null, _react.default.createElement(_ui.Button, {
    classes: [mdcAction, mdcActionButton]
  }, "Done"), _react.default.createElement(_ui.Button, {
    classes: [mdcAction, mdcActionButton]
  }, "Done All")), _react.default.createElement(_ui.CardActionIcons, null, _react.default.createElement(_ui.IconButton, {
    classes: [mdcAction, mdcActionIcon],
    font: _constants.DONE
  }), _react.default.createElement(_ui.IconButton, {
    classes: [mdcAction, mdcActionIcon],
    font: _constants.DONE_ALL
  })))))));
};

var _default = Demo;
exports.default = _default;