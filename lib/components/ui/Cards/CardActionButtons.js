"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("@material/card/dist/mdc.card.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: CardActionButtons
 *
 * @param {Node} children Content
 */
var CardActionButton = function CardActionButton(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "mdc-card__action-buttons"
  }, children);
};

CardActionButton.propTypes = {
  children: _propTypes.node
};
var _default = CardActionButton;
exports.default = _default;