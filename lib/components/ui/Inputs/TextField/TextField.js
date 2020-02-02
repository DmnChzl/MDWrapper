"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/textfield/dist/mdc.textfield");

var _FormField = _interopRequireDefault(require("../FormField"));

var _FloatingLabel = _interopRequireDefault(require("../FloatingLabel"));

var _LineRipple = _interopRequireDefault(require("../LineRipple"));

var _NotchedOutline = _interopRequireDefault(require("../NotchedOutline"));

var _TextFieldIcon = _interopRequireDefault(require("./TextFieldIcon"));

var _TextFieldHelperText = _interopRequireDefault(require("./TextFieldHelperText"));

require("@material/textfield/dist/mdc.textfield.css");

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

var clearFix = {
  display: 'block'
};
/**
 * MD Component: TextField
 *
 * @param {Boolean} fullWidth Full Width Style
 * @param {Boolean} disabled Available State
 * @param {String} helper Helper Text
 * @param {String} icon Material Design Icon
 * @param {String} label Label
 * @param {Function} onChange Change Trigger
 * @param {Boolean} outlined Outlined Style
 * @param {String} placeholder Indicator Text
 * @param {Boolean} trailing Trailing
 */

var TextField =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextField, _PureComponent);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextField).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCTextField(this.mdTextField);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          fullWidth = _this$props.fullWidth,
          disabled = _this$props.disabled,
          helper = _this$props.helper,
          icon = _this$props.icon,
          label = _this$props.label,
          _onChange = _this$props.onChange,
          outlined = _this$props.outlined,
          placeholder = _this$props.placeholder,
          trailing = _this$props.trailing; // Class(es)

      var mdcFullWidth = 'mdc-text-field--fullwidth';
      var mdcDisabled = 'mdc-text-field--disabled';
      var mdcWithLeadingIcon = 'mdc-text-field--with-leading-icon';
      var mdcOutlined = 'mdc-text-field--outlined';
      var mdcWithTrailingIcon = 'mdc-text-field--with-trailing-icon';
      var mdcNoLabel = 'mdc-text-field--no-label';
      return _react.default.createElement(_FormField.default, {
        style: clearFix
      }, _react.default.createElement("div", {
        ref: function ref(element) {
          _this.mdTextField = element;
        },
        className: (0, _classnames.default)('mdc-text-field', _defineProperty({}, mdcFullWidth, fullWidth), _defineProperty({}, mdcDisabled, disabled), _defineProperty({}, mdcWithLeadingIcon, icon && !trailing), _defineProperty({}, mdcOutlined, outlined), _defineProperty({}, mdcWithTrailingIcon, icon && trailing), _defineProperty({}, mdcNoLabel, !label))
      }, icon && _react.default.createElement(_TextFieldIcon.default, {
        font: icon
      }), _react.default.createElement("input", {
        className: "mdc-text-field__input",
        type: "text",
        placeholder: placeholder,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        disabled: disabled
      }), !outlined && label && _react.default.createElement(_FloatingLabel.default, null, label), outlined && _react.default.createElement(_NotchedOutline.default, null, label && _react.default.createElement(_FloatingLabel.default, null, label)), !outlined && _react.default.createElement(_LineRipple.default, null)), helper && _react.default.createElement(_TextFieldHelperText.default, null, helper));
    }
  }]);

  return TextField;
}(_react.PureComponent);

TextField.defaultProps = {
  fullWidth: false,
  disabled: false,
  onChange: function onChange() {},
  outlined: false,
  placeholder: '',
  trailing: false
};
TextField.propTypes = {
  fullWidth: _propTypes.bool,
  disabled: _propTypes.bool,
  helper: _propTypes.string,
  icon: _propTypes.string,
  label: _propTypes.string,
  onChange: _propTypes.func,
  outlined: _propTypes.bool,
  placeholder: _propTypes.string,
  trailing: _propTypes.bool
};
var _default = TextField;
exports.default = _default;