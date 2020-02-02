"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _mdc = require("@material/list/dist/mdc.list");

var _ListItem = _interopRequireDefault(require("./ListItem"));

require("@material/list/dist/mdc.list.css");

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
  border: '1px solid rgba(0, 0, 0, 0.1)'
};
/**
 * MD Component: List
 *
 * @param {Array} data Data
 * @param {Function} onClick Click Trigger
 */

var List =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCList(this.mdList);
      this.mdComponent.singleSelection = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          data = _this$props.data,
          onClick = _this$props.onClick; // Class(es)

      var mdcTwoLine = 'mdc-list--two-line';
      var mdcAvatarList = 'mdc-list--avatar-list';
      return _react.default.createElement("ul", {
        ref: function ref(element) {
          _this.mdList = element;
        },
        className: (0, _classnames.default)('mdc-list', _defineProperty({}, mdcTwoLine, data.find(function (_ref) {
          var subTitle = _ref.subTitle;
          return subTitle;
        })), _defineProperty({}, mdcAvatarList, data.find(function (_ref2) {
          var leadingIcon = _ref2.leadingIcon,
              subTitle = _ref2.subTitle;
          return leadingIcon && subTitle;
        }))),
        role: "listbox",
        style: clearFix
      }, data.map(function (_ref3, index) {
        var leadingIcon = _ref3.leadingIcon,
            title = _ref3.title,
            subTitle = _ref3.subTitle,
            trailingIcon = _ref3.trailingIcon;
        return _react.default.createElement(_ListItem.default, {
          key: index,
          leadingIcon: leadingIcon,
          title: title,
          subTitle: subTitle,
          trailingIcon: trailingIcon,
          onClick: onClick
        });
      }));
    }
  }]);

  return List;
}(_react.PureComponent);

List.defaultProps = {
  data: [],
  onClick: function onClick() {}
};
List.propTypes = {
  data: _propTypes.array,
  onClick: _propTypes.func
};
var _default = List;
exports.default = _default;