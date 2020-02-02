"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/slider/dist/mdc.slider");

require("@material/slider/dist/mdc.slider.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * MD Component: Slider
 *
 * @param {Boolean} disabled Available State
 * @param {Boolean} discrete Discrete Style
 * @param {Boolean} displayMarkers Display Markers Style
 * @param {Number} max Max Value
 * @param {Number} min Min Value
 * @param {Function} onChange Change Trigger
 * @param {Number} step Step Value
 * @param {Number} value Default Value
 */
var Slider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "clearFix", function () {
      var style = getComputedStyle(_this.mdTrackContainer);
      var color = style.getPropertyValue('--mdc-theme-secondary');
      _this.mdTrackContainer.style['background-color'] = "".concat(color, "40"); // Opacity: 25%
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var onChange = _this.props.onChange;
      onChange(_this.mdComponent.value);
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCSlider(this.mdSlider);
      this.mdComponent.listen('MDCSlider:change', this.handleChange);
      this.clearFix();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          disabled = _this$props.disabled,
          discrete = _this$props.discrete,
          displayMarkers = _this$props.displayMarkers,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step,
          value = _this$props.value; // Class(es)

      var mdcDiscrete = 'mdc-slider--discrete';
      var mdcDisplayMarkers = 'mdc-slider--display-markers'; // Attribute(s)

      var attrAriaValueNow = {
        'aria-valuenow': "".concat(value ? value : (min + max) / 2)
      };
      return _react.default.createElement("div", _extends({
        ref: function ref(element) {
          _this2.mdSlider = element;
        },
        className: (0, _classnames.default)('mdc-slider', _defineProperty({}, mdcDiscrete, discrete), _defineProperty({}, mdcDisplayMarkers, discrete && displayMarkers)),
        role: "slider",
        "data-step": step,
        "aria-valuemax": max,
        "aria-valuemin": min
      }, attrAriaValueNow, {
        tabIndex: 0,
        "aria-disabled": disabled
      }), _react.default.createElement("div", {
        ref: function ref(element) {
          _this2.mdTrackContainer = element;
        },
        className: "mdc-slider__track-container"
      }, _react.default.createElement("div", {
        className: "mdc-slider__track"
      }), discrete && displayMarkers && _react.default.createElement("div", {
        className: "mdc-slider__track-marker-container"
      })), _react.default.createElement("div", {
        className: "mdc-slider__thumb-container"
      }, discrete && _react.default.createElement("div", {
        className: "mdc-slider__pin"
      }, _react.default.createElement("span", {
        className: "mdc-slider__pin-value-marker"
      })), _react.default.createElement("svg", {
        className: "mdc-slider__thumb",
        width: "21",
        height: "21"
      }, _react.default.createElement("circle", {
        cx: "10.5",
        cy: "10.5",
        r: "7.875"
      })), _react.default.createElement("div", {
        className: "mdc-slider__focus-ring"
      })));
    }
  }]);

  return Slider;
}(_react.PureComponent);

Slider.defaultProps = {
  disabled: false,
  discrete: false,
  displayMarkers: false,
  max: 100,
  min: 0,
  onChange: function onChange() {},
  step: 1
};
Slider.propTypes = {
  disabled: _propTypes.bool,
  discrete: _propTypes.bool,
  displayMarkers: _propTypes.bool,
  max: _propTypes.number,
  min: _propTypes.number,
  onChange: _propTypes.func,
  step: _propTypes.number,
  value: _propTypes.number
};
var _default = Slider;
exports.default = _default;