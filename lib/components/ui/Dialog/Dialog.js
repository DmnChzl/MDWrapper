"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _mdc = require("@material/dialog/dist/mdc.dialog");

require("@material/dialog/dist/mdc.dialog.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * MD Component: Dialog
 * 
 * @param {Object} children Node Content
 * @param {Boolean} open Open
 * @param {String} title Title
 */
var Dialog =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Dialog, _PureComponent);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dialog).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mdComponent = new _mdc.MDCDialog(this.mdDialog);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var open = this.props.open;
      open ? this.mdComponent.open() : this.mdComponent.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title;
      return _react.default.createElement("div", {
        ref: function ref(element) {
          _this.mdDialog = element;
        },
        className: "mdc-dialog",
        role: "alertdialog",
        "aria-modal": "true",
        "aria-labelledby": "my-dialog-title",
        "aria-describedby": "my-dialog-content"
      }, _react.default.createElement("div", {
        className: "mdc-dialog__container"
      }, _react.default.createElement("div", {
        className: "mdc-dialog__surface"
      }, _react.default.createElement("h2", {
        className: "mdc-dialog__title",
        id: "my-dialog-title"
      }, title), children)), _react.default.createElement("div", {
        className: "mdc-dialog__scrim"
      }));
    }
  }]);

  return Dialog;
}(_react.PureComponent);

Dialog.defaultProps = {
  open: false,
  title: 'Default'
};
Dialog.propTypes = {
  children: _propTypes.node,
  open: _propTypes.bool,
  title: _propTypes.string
};
var _default = Dialog;
exports.default = _default;