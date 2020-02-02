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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * MD Component: SnackBar
 *
 * @param {Object} children Node Content
 * @param {String} label Label
 * @param {Boolean} leading Leading Style
 * @param {Function} onClick Click Trigger
 * @param {Boolean} open Open
 * @param {Boolean} stacked Stacked Style
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var open = this.props.open;

      if (open) {
        this.mdComponent.open();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          label = _this$props.label,
          leading = _this$props.leading,
          _onClick = _this$props.onClick,
          stacked = _this$props.stacked; // Class(es)

      var mdcLeading = 'mdc-snackbar--leading';
      var mdcStacked = 'mdc-snackbar--stacked';
      return _react.default.createElement("div", {
        ref: function ref(element) {
          _this.mdSnackBar = element;
        },
        className: (0, _classnames.default)('mdc-snackbar', _defineProperty({}, mdcLeading, leading), _defineProperty({}, mdcStacked, stacked && !leading))
      }, _react.default.createElement("div", {
        className: "mdc-snackbar__surface"
      }, _react.default.createElement("div", {
        className: "mdc-snackbar__label",
        role: "status",
        "aria-live": "polite"
      }, children), _react.default.createElement("div", {
        className: "mdc-snackbar__actions"
      }, _react.default.createElement("button", {
        className: "mdc-button mdc-snackbar__action",
        type: "button",
        onClick: function onClick() {
          return _onClick();
        }
      }, label))));
    }
  }]);

  return SnackBar;
}(_react.PureComponent);

SnackBar.defaultProps = {
  label: 'default',
  leading: false,
  onClick: function onClick() {},
  open: false,
  stacked: false
};
SnackBar.propTypes = {
  children: _propTypes.node,
  label: _propTypes.string,
  leading: _propTypes.bool,
  onClick: _propTypes.func,
  open: _propTypes.bool,
  stacked: _propTypes.bool
};
var _default = SnackBar;
exports.default = _default;