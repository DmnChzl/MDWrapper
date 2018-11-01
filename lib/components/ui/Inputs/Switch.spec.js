"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Switch = _interopRequireDefault(require("./Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Switch Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Switch.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      label: 'Test',
      disabled: true
    });
    expect(wrapper.props().checked).toBe(false);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().label).toHaveLength(4);
  });
  it('Simulate Change Event', function () {
    var value = false;
    wrapper.setProps({
      onChange: function onChange(event) {
        value = event.target.checked;
      }
    });
    wrapper.find('input').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(value).toBe(true);
  });
});