"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/snackbar/dist/mdc.snackbar");

require("@material/snackbar/dist/mdc.snackbar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var clearFix = {
  borderRadius: 2
};
/**
 * MD Component: SnackBar
 * 
 * @param {Boolean} active Active
 * @param {Boolean} aligned Aligned Style
 * @param {Object} children Node Content
 * @param {String} label Label
 * @param {Function} onClick Click Trigger
 */

var SnackBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SnackBar, _PureComponent);

  function SnackBar() {
    _classCallCheck(this, SnackBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SnackBar).apply(this, arguments));
  }

  _createClass(SnackBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCSnackbar(this.mdSnackBar);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          active = _this$props.active,
          aligned = _this$props.aligned,
          children = _this$props.children,
          label = _this$props.label,
          _onClick = _this$props.onClick; // Class(es)

      var mdcActive = 'mdc-snackbar--active';
      var mdcAlignStart = 'mdc-snackbar--align-start'; // Attribute(s)

      var attrAriaHidden = !active ? {
        'aria-hidden': 'true'
      } : {};
      return _react.default.createElement("div", _extends({
        ref: function ref(element) {
          _this.mdSnackBar = element;
        },
        className: (0, _classnames.default)('mdc-snackbar', _defineProperty({}, mdcActive, active), _defineProperty({}, mdcAlignStart, aligned)),
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, attrAriaHidden, {
        style: clearFix
      }), _react.default.createElement("div", {
        className: "mdc-snackbar__text"
      }, children), _react.default.createElement("div", {
        className: "mdc-snackbar__action-wrapper"
      }, _react.default.createElement("button", _extends({
        className: "mdc-snackbar__action-button",
        type: "button"
      }, attrAriaHidden, {
        onClick: function onClick() {
          return _onClick();
        }
      }), label)));
    }
  }]);

  return SnackBar;
}(_react.PureComponent);

SnackBar.defaultProps = {
  active: false,
  aligned: false,
  label: 'default',
  onClick: function onClick() {}
};
SnackBar.propTypes = {
  active: _propTypes.bool,
  aligned: _propTypes.bool,
  children: _propTypes.node,
  label: _propTypes.string,
  onClick: _propTypes.func
};
var _default = SnackBar;
exports.default = _default;