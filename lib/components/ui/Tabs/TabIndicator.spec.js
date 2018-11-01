"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TabIndicator = _interopRequireDefault(require("./TabIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TabIndicator Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_TabIndicator.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      active: true
    });
    expect(wrapper.props().active).toBe(true);
    expect(wrapper.props().underline).toBe(false);
  });
});