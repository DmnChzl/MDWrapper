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
 * MD Component: DialogActions
 *
 * @param {Object} children Node Content
 */
var DialogActions = function DialogActions(_ref) {
  var children = _ref.children;
  return _react.default.createElement("footer", {
    className: "mdc-dialog__actions"
  }, children);
};

DialogActions.propTypes = {
  children: _propTypes.node
};
var _default = DialogActions;
exports.default = _default;