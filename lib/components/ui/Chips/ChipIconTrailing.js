"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _constants = require("../../../constants");

require("@material/chips/dist/mdc.chips.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: ChipIconTrailing
 *
 * @param {String} font Material Design Icon Font
 * @param {Function} onClick Click Trigger
 */
var ChipIconTrailing = function ChipIconTrailing(_ref) {
  var font = _ref.font,
      _onClick = _ref.onClick;
  return _react.default.createElement("i", {
    className: "material-icons mdc-chip__icon mdc-chip__icon--trailing",
    role: "button",
    onClick: function onClick() {
      return _onClick();
    },
    tabIndex: 0
  }, font);
};

ChipIconTrailing.defaultProps = {
  font: _constants.CANCEL,
  onClick: function onClick() {}
};
ChipIconTrailing.propTypes = {
  font: _propTypes.string,
  onClick: _propTypes.func
};
var _default = ChipIconTrailing;
exports.default = _default;