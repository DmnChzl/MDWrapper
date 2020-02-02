"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: TopBarIcon
 *
 * @param {String} font Material Design Icon Font
 * @param {Function} onClick Click Trigger
 */
var TopBarIcon = function TopBarIcon(_ref) {
  var font = _ref.font,
      _onClick = _ref.onClick;
  return _react.default.createElement("button", {
    className: "material-icons mdc-top-app-bar__action-item mdc-icon-button",
    onClick: function onClick() {
      return _onClick();
    }
  }, font);
};

TopBarIcon.defaultProps = {
  font: _constants.BOOKMARK,
  onClick: function onClick() {}
};
TopBarIcon.propTypes = {
  font: _propTypes.string,
  onClick: _propTypes.func
};
var _default = TopBarIcon;
exports.default = _default;