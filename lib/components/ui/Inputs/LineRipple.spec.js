"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _LineRipple = _interopRequireDefault(require("./LineRipple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('LineRipple Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_LineRipple.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
});