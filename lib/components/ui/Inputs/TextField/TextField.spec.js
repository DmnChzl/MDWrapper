"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TextField = _interopRequireDefault(require("./TextField"));

var _constants = require("../../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TextField Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_TextField.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true);
  });
  it('Check Props', function () {
    wrapper.setProps({
      fullWidth: true,
      helper: 'Need Help ?',
      icon: _constants.DONE,
      label: 'Done',
      outlined: true,
      trailing: true
    });
    expect(wrapper.props().fullWidth).toBe(true);
    expect(wrapper.props().disabled).toBe(false);
    expect(wrapper.props().helper).toBeDefined();
    expect(wrapper.props().icon).toEqual(_constants.DONE);
    expect(wrapper.props().label).toHaveLength(4);
    expect(wrapper.props().outlined).toBe(true);
    expect(wrapper.props().placeholder).toBeFalsy();
    expect(wrapper.props().trailing).toBe(true);
  });
  it('Simulate Change Event', function () {
    var value = '';
    wrapper.setProps({
      onChange: function onChange(event) {
        value = event.target.value;
      }
    });
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Test'
      }
    });
    expect(value).toHaveLength(4);
  });
});