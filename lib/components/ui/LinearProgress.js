"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/linear-progress/dist/mdc.linearProgress");

require("@material/linear-progress/dist/mdc.linear-progress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * MD Component: LinearProgress
 *
 * @param {Boolean} buffered Buffered Style
 * @param {Boolean} indeterminate Indeterminate Style
 * @param {Boolean} reversed Reversed Style
 * @param {Number} value Current Value
 */
var LinearProgress =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LinearProgress, _PureComponent);

  function LinearProgress() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LinearProgress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LinearProgress)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "syncProgress", function () {
      var _this$props = _this.props,
          buffered = _this$props.buffered,
          value = _this$props.value;
      _this.mdComponent.progress = value / 100;
      var buffer = ((100 - value) / 2 + value) / 100;
      _this.mdComponent.buffer = buffered ? buffer : 100;
    });

    return _this;
  }

  _createClass(LinearProgress, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCLinearProgress(this.mdLinearProgress);
      this.syncProgress();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncProgress();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          buffered = _this$props2.buffered,
          indeterminate = _this$props2.indeterminate,
          reversed = _this$props2.reversed; // Class(es)

      var mdcIndeterminate = 'mdc-linear-progress--indeterminate';
      var mdcReversed = 'mdc-linear-progress--reversed';
      return _react.default.createElement("div", {
        ref: function ref(element) {
          _this2.mdLinearProgress = element;
        },
        className: (0, _classnames.default)('mdc-linear-progress', _defineProperty({}, mdcIndeterminate, indeterminate), _defineProperty({}, mdcReversed, reversed)),
        role: "progressbar"
      }, buffered && _react.default.createElement("div", {
        className: "mdc-linear-progress__buffering-dots"
      }), _react.default.createElement("div", {
        className: "mdc-linear-progress__buffer"
      }), _react.default.createElement("div", {
        className: "mdc-linear-progress__bar mdc-linear-progress__primary-bar"
      }, _react.default.createElement("span", {
        className: "mdc-linear-progress__bar-inner"
      })), _react.default.createElement("div", {
        className: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
      }, _react.default.createElement("span", {
        className: "mdc-linear-progress__bar-inner"
      })));
    }
  }]);

  return LinearProgress;
}(_react.PureComponent);

LinearProgress.defaultProps = {
  buffered: false,
  indeterminate: false,
  reversed: false,
  value: 50
};
LinearProgress.propTypes = {
  buffered: _propTypes.bool,
  indeterminate: _propTypes.bool,
  reversed: _propTypes.bool,
  value: _propTypes.number
};
var _default = LinearProgress;
exports.default = _default;