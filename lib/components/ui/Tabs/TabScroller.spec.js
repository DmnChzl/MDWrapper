"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TabScroller = _interopRequireDefault(require("./TabScroller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TabScroller Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_TabScroller.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    expect(wrapper.props().children).toHaveLength(4);
  });
});