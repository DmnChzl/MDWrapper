"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/ripple/dist/mdc.ripple");

require("@material/fab/dist/mdc.fab.css");

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
 * MD Component: FAB
 *
 * @param {Object} children Node Content
 * @param {String} label Label
 * @param {Boolean} mini Mini Style
 * @param {Function} onClick Click Trigger
 */
var FAB =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FAB, _PureComponent);

  function FAB() {
    _classCallCheck(this, FAB);

    return _possibleConstructorReturn(this, _getPrototypeOf(FAB).apply(this, arguments));
  }

  _createClass(FAB, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCRipple(this.mdFab);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          label = _this$props.label,
          mini = _this$props.mini,
          _onClick = _this$props.onClick; // Class(es)

      var mdcExtended = 'mdc-fab--extended';
      var mdcMini = 'mdc-fab--mini';
      return _react.default.createElement("button", {
        ref: function ref(element) {
          _this.mdFab = element;
        },
        className: (0, _classnames.default)('mdc-fab', _defineProperty({}, mdcExtended, label), _defineProperty({}, mdcMini, mini)),
        onClick: function onClick() {
          return _onClick();
        }
      }, children, label && _react.default.createElement("span", {
        className: "mdc-fab__label"
      }, label));
    }
  }]);

  return FAB;
}(_react.PureComponent);

FAB.defaultProps = {
  mini: false,
  onClick: function onClick() {}
};
FAB.propTypes = {
  children: _propTypes.node,
  label: _propTypes.string,
  mini: _propTypes.bool,
  onClick: _propTypes.func
};
var _default = FAB;
exports.default = _default;