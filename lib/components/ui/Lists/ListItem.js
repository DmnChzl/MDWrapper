"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearFix = {
  cursor: 'pointer'
};
/**
 * MD Component: ListItem
 *
 * @param {String} leadingIcon Material Design Leading Icon
 * @param {Function} onClick Click Trigger
 * @param {String} subTitle SubTitle
 * @param {String} title Title
 * @param {String} trailingIcon Material Design Trailing Icon
 */

var ListItem = function ListItem(_ref) {
  var leadingIcon = _ref.leadingIcon,
      _onClick = _ref.onClick,
      subTitle = _ref.subTitle,
      title = _ref.title,
      trailingIcon = _ref.trailingIcon;
  return title ? _react.default.createElement("li", {
    className: "mdc-list-item",
    role: "option",
    onClick: function onClick() {
      return _onClick({
        leadingIcon: leadingIcon,
        title: title,
        subTitle: subTitle,
        trailingIcon: trailingIcon
      });
    },
    style: clearFix
  }, leadingIcon && _react.default.createElement("span", {
    className: "mdc-list-item__graphic material-icons"
  }, leadingIcon), !subTitle && _react.default.createElement("span", {
    className: "mdc-list-item__text"
  }, title), subTitle && _react.default.createElement("span", {
    className: "mdc-list-item__text"
  }, _react.default.createElement("span", {
    className: "mdc-list-item__primary-text"
  }, title), _react.default.createElement("span", {
    className: "mdc-list-item__secondary-text"
  }, subTitle)), trailingIcon && _react.default.createElement("span", {
    className: "mdc-list-item__meta material-icons"
  }, trailingIcon)) : _react.default.createElement("li", {
    className: "mdc-list-divider",
    role: "separator"
  });
};

ListItem.defaultProps = {
  onClick: function onClick() {}
};
ListItem.propTypes = {
  leadingIcon: _propTypes.string,
  onClick: _propTypes.func,
  subTitle: _propTypes.string,
  title: _propTypes.string,
  trailingIcon: _propTypes.string
};
var _default = ListItem;
exports.default = _default;