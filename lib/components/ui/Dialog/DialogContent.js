"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("@material/dialog/dist/mdc.dialog.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * MD Component: DialogContent
 *
 * @param {Object} children Node Content
 */
var DialogContent = function DialogContent(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "mdc-dialog__content"
  }, children);
};

DialogContent.propTypes = {
  children: _propTypes.node
};
var _default = DialogContent;
exports.default = _default;