"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/select/dist/mdc.select");

var _FormField = _interopRequireDefault(require("../FormField"));

var _FloatingLabel = _interopRequireDefault(require("../FloatingLabel"));

var _LineRipple = _interopRequireDefault(require("../LineRipple"));

var _NotchedOutline = _interopRequireDefault(require("../NotchedOutline"));

var _SelectMenuIcon = _interopRequireDefault(require("./SelectMenuIcon"));

var _SelectMenuHelperText = _interopRequireDefault(require("./SelectMenuHelperText"));

require("@material/select/dist/mdc.select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * MD Component: SelectMenu
 *
 * @param {Array} data Data
 * @param {Boolean} disabled Available State
 * @param {String} helper Helper Text
 * @param {String} icon Material Design Icon
 * @param {String} label Label
 * @param {Function} onChange Change Trigger
 * @param {Boolean} outlined Outlined Style
 */
var SelectMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectMenu, _PureComponent);

  function SelectMenu() {
    _classCallCheck(this, SelectMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectMenu).apply(this, arguments));
  }

  _createClass(SelectMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCSelect(this.mdSelectMenu);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          data = _this$props.data,
          disabled = _this$props.disabled,
          helper = _this$props.helper,
          icon = _this$props.icon,
          label = _this$props.label,
          _onChange = _this$props.onChange,
          outlined = _this$props.outlined; // Class(es)

      var mdcDisabled = 'mdc-select--disabled';
      var mdcOutlined = 'mdc-select--outlined';
      var mdcWithLeadingIcon = 'mdc-select--with-leading-icon';
      return _react.default.createElement(_FormField.default, null, _react.default.createElement("div", {
        ref: function ref(element) {
          _this.mdSelectMenu = element;
        },
        className: (0, _classnames.default)('mdc-select', _defineProperty({}, mdcDisabled, disabled), _defineProperty({}, mdcOutlined, outlined), _defineProperty({}, mdcWithLeadingIcon, icon))
      }, icon && _react.default.createElement(_SelectMenuIcon.default, {
        font: icon
      }), _react.default.createElement("i", {
        className: "mdc-select__dropdown-icon"
      }), _react.default.createElement("select", {
        className: "mdc-select__native-control",
        onChange: function onChange(e) {
          return _onChange(e);
        },
        defaultValue: "",
        disabled: disabled
      }, _react.default.createElement("option", {
        value: "",
        disabled: true
      }), data.map(function (value, index) {
        return _react.default.createElement("option", {
          key: index,
          value: value
        }, value);
      })), !outlined && _react.default.createElement(_react.default.Fragment, null, label && _react.default.createElement(_FloatingLabel.default, null, label), _react.default.createElement(_LineRipple.default, null)), outlined && _react.default.createElement(_NotchedOutline.default, null, label && _react.default.createElement(_FloatingLabel.default, null, label))), helper && _react.default.createElement(_SelectMenuHelperText.default, null, helper));
    }
  }]);

  return SelectMenu;
}(_react.PureComponent);

SelectMenu.defaultProps = {
  data: [],
  disabled: false,
  onChange: function onChange() {},
  outlined: false
};
SelectMenu.propTypes = {
  data: _propTypes.array,
  disabled: _propTypes.bool,
  helper: _propTypes.string,
  icon: _propTypes.string,
  label: _propTypes.string,
  onChange: _propTypes.func,
  outlined: _propTypes.bool
};
var _default = SelectMenu;
exports.default = _default;