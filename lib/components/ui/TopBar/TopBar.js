"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/top-app-bar/dist/mdc.topAppBar");

require("@material/top-app-bar/dist/mdc.top-app-bar.css");

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
 * MD Component: TopBar
 * 
 * @param {Object} children Node Content
 * @param {Boolean} collapsed Always Short Style
 * @param {Boolean} dense Dense Style
 * @param {Boolean} fixed Fixed Style
 * @param {Function} onClick Click Trigger
 * @param {Boolean} prominent Prominent Style
 * @param {Boolean} short Short Style
 * @param {String} title Title
 */
var TopBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TopBar, _PureComponent);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopBar).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCTopAppBar(this.mdTopAppBar);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          collapsed = _this$props.collapsed,
          dense = _this$props.dense,
          fixed = _this$props.fixed,
          _onClick = _this$props.onClick,
          prominent = _this$props.prominent,
          short = _this$props.short,
          title = _this$props.title; // Class(es)

      var mdcDense = 'mdc-top-app-bar--dense';
      var mdcFixed = 'mdc-top-app-bar--fixed';
      var mdcProminent = 'mdc-top-app-bar--prominent';
      var mdcShort = 'mdc-top-app-bar--short';
      var mdcShortCollapsed = 'mdc-top-app-bar--short-collapsed';
      return _react.default.createElement("header", {
        ref: function ref(element) {
          _this.mdTopAppBar = element;
        },
        className: (0, _classnames.default)('mdc-top-app-bar', _defineProperty({}, mdcDense, dense), _defineProperty({}, mdcFixed, fixed), _defineProperty({}, mdcProminent, prominent), _defineProperty({}, mdcShort, short), _defineProperty({}, mdcShortCollapsed, short && collapsed))
      }, _react.default.createElement("div", {
        className: "mdc-top-app-bar__row"
      }, _react.default.createElement("section", {
        className: "mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      }, _react.default.createElement("button", {
        className: "material-icons mdc-top-app-bar__navigation-icon mdc-icon-button",
        onClick: function onClick() {
          return _onClick();
        }
      }, "menu"), _react.default.createElement("span", {
        className: "mdc-top-app-bar__title"
      }, title)), children && _react.default.createElement("section", {
        className: "mdc-top-app-bar__section mdc-top-app-bar__section--align-end",
        role: "toolbar"
      }, children)));
    }
  }]);

  return TopBar;
}(_react.PureComponent);

TopBar.defaultProps = {
  collapsed: false,
  dense: false,
  fixed: false,
  onClick: function onClick() {},
  prominent: false,
  short: false,
  title: 'Default'
};
TopBar.propTypes = {
  children: _propTypes.node,
  collapsed: _propTypes.bool,
  dense: _propTypes.bool,
  fixed: _propTypes.bool,
  onClick: _propTypes.func,
  prominent: _propTypes.bool,
  short: _propTypes.bool,
  title: _propTypes.string
};
var _default = TopBar;
exports.default = _default;