"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/icon-toggle/dist/mdc.iconToggle");

var _constants = require("../../../constants");

require("@material/icon-toggle/dist/mdc.icon-toggle.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
 * MD Component: IconToggle
 *
 * @param {Boolean} disabled Available State
 * @param {String} fontOff Material Design Icon Font Off
 * @param {String} fontOn Material Design Icon Font On
 * @param {String} labelOff Label Off
 * @param {String} labelOn Label On
 * @param {Function} onClick Click Trigger
 */
var IconToggle =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(IconToggle, _PureComponent);

  function IconToggle() {
    _classCallCheck(this, IconToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconToggle).apply(this, arguments));
  }

  _createClass(IconToggle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCIconToggle(this.mdIconToggle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          disabled = _this$props.disabled,
          fontOff = _this$props.fontOff,
          fontOn = _this$props.fontOn,
          labelOff = _this$props.labelOff,
          labelOn = _this$props.labelOn,
          _onClick = _this$props.onClick; // Class(es)

      var mdcDisabled = 'mdc-icon-toggle--disabled'; // Attribute(s)

      var attrDataToggleOn = {
        'data-toggle-on': "{ \"label\": \"".concat(labelOn, "\", \"content\": \"").concat(fontOn, "\" }")
      };
      var attrDataToggleOff = {
        'data-toggle-off': "{ \"label\": \"".concat(labelOff, "\", \"content\": \"").concat(fontOff, "\" }")
      };
      var attrTabIndex = disabled ? {
        'tab-index': '-1'
      } : {
        'tab-index': '0'
      };
      return _react.default.createElement("i", _extends({
        ref: function ref(element) {
          _this.mdIconToggle = element;
        },
        className: (0, _classnames.default)('material-icons', 'mdc-icon-toggle', _defineProperty({}, mdcDisabled, disabled)),
        role: "button",
        "aria-disabled": disabled,
        "aria-label": labelOff,
        "aria-pressed": "false"
      }, attrDataToggleOn, attrDataToggleOff, {
        onClick: function onClick() {
          return _onClick();
        }
      }, attrTabIndex), fontOff);
    }
  }]);

  return IconToggle;
}(_react.PureComponent);

IconToggle.defaultProps = {
  disabled: false,
  fontOff: _constants.STAR_BORDER,
  fontOn: _constants.STAR,
  labelOff: 'Off',
  labelOn: 'On',
  onClick: function onClick() {}
};
IconToggle.propTypes = {
  disabled: _propTypes.bool,
  fontOff: _propTypes.string,
  fontOn: _propTypes.string,
  labelOff: _propTypes.string,
  labelOn: _propTypes.string,
  onClick: _propTypes.func
};
var _default = IconToggle;
exports.default = _default;