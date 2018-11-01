"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      disabled: true,
      raised: true
    });
    expect(wrapper.props().classes).toHaveLength(0);
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().dense).toBe(false);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().outlined).toBe(false);
    expect(wrapper.props().raised).toBe(true);
    expect(wrapper.props().unelevated).toBe(false);
  });
  it('Simulate Click Event', function () {
    var value = false;
    wrapper.setProps({
      onClick: function onClick() {
        value = true;
      }
    });
    wrapper.find('button').simulate('click');
    expect(value).toBe(true);
  });
});