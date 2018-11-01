"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * MD Component: Icon
 *
 * @param {Array} classes Overrides Class
 * @param {String} font Material Design Icon Font
 */
var Icon = function Icon(_ref) {
  var classes = _ref.classes,
      font = _ref.font;
  return _react.default.createElement("i", {
    className: _classnames.default.apply(void 0, ['material-icons'].concat(_toConsumableArray(classes)))
  }, font);
};

Icon.defaultProps = {
  classes: [],
  font: _constants.STARS
};
Icon.propTypes = {
  classes: _propTypes.array,
  font: _propTypes.string
};
var _default = Icon;
exports.default = _default;