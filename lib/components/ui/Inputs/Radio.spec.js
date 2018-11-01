"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Radio = _interopRequireDefault(require("./Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Radio Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Radio.default, null));
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
    expect(wrapper.props().name).toEqual('default');
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