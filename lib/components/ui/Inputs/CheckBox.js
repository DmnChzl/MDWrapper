"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/checkbox/dist/mdc.checkbox");

var _FormField = _interopRequireDefault(require("./FormField"));

require("@material/checkbox/dist/mdc.checkbox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * MD Component: CheckBox
 *
 * @param {Boolean} checked Default Value
 * @param {Boolean} disabled Available State
 * @param {String} label Label
 * @param {Function} onChange Change Trigger
 */
var CheckBox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CheckBox, _PureComponent);

  function CheckBox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "generateId", function (base) {
      return base.trim().toLowerCase();
    });

    return _this;
  }

  _createClass(CheckBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCCheckbox(this.mdCheckBox);
    }
    /**
     * Generate ID For Input & Label
     * 
     * @param {String} base Whatever U Want
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          label = _this$props.label,
          _onChange = _this$props.onChange; // Class(es)

      var mdcDisabled = 'mdc-checkbox--disabled'; // Attribute(s)

      var attrId = label ? {
        'id': "".concat(this.generateId(label))
      } : {};
      return _react.default.createElement(_FormField.default, null, _react.default.createElement("div", {
        ref: function ref(element) {
          _this2.mdCheckBox = element;
        },
        className: (0, _classnames.default)('mdc-checkbox', _defineProperty({}, mdcDisabled, disabled))
      }, _react.default.createElement("input", _extends({
        className: "mdc-checkbox__native-control"
      }, attrId, {
        type: "checkbox",
        defaultChecked: checked,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        disabled: disabled
      })), _react.default.createElement("div", {
        className: "mdc-checkbox__background"
      }, _react.default.createElement("svg", {
        className: "mdc-checkbox__checkmark",
        viewBox: "0 0 24 24"
      }, _react.default.createElement("path", {
        className: "mdc-checkbox__checkmark-path",
        fill: "none",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
      })), _react.default.createElement("div", {
        className: "mdc-checkbox__mixedmark"
      }))), label && _react.default.createElement("label", {
        htmlFor: this.generateId(label)
      }, label));
    }
  }]);

  return CheckBox;
}(_react.PureComponent);

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: function onChange() {}
};
CheckBox.propTypes = {
  checked: _propTypes.bool,
  disabled: _propTypes.bool,
  label: _propTypes.string,
  onChange: _propTypes.func
};
var _default = CheckBox;
exports.default = _default;