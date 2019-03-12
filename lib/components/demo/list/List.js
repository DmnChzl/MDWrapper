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
 * Demo: List
 */

var Demo = function Demo() {
  return _react.default.createElement(_ui.Grid, null, _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 4
  }, _react.default.createElement(_ui.List, {
    data: [{
      leadingIcon: _constants.FOLDER,
      title: 'First'
    }, {
      leadingIcon: _constants.FOLDER,
      title: 'Second'
    }, '', {
      title: 'Third',
      trailingIcon: _constants.INFO
    }, {
      title: 'Four',
      trailingIcon: _constants.INFO
    }],
    onClick: function onClick(item) {
      return console.log(item);
    }
  }))), _react.default.createElement(_ui.GridInner, {
    style: clearFix
  }, _react.default.createElement(_ui.GridCell, {
    col: 4
  }, _react.default.createElement(_ui.List, {
    data: [{
      leadingIcon: _constants.FOLDER,
      title: 'First',
      subTitle: 'Sub First'
    }, {
      leadingIcon: _constants.FOLDER,
      title: 'Second',
      subTitle: 'Sub Second'
    }, '', {
      title: 'Third',
      subTitle: 'Sub Third',
      trailingIcon: _constants.INFO
    }, {
      title: 'Four',
      subTitle: 'Sub Four',
      trailingIcon: _constants.INFO
    }],
    onClick: function onClick(item) {
      return console.log(item);
    }
  }))));
};

var _default = Demo;
exports.default = _default;