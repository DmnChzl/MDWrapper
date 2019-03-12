"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MenuItem Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_MenuItem.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      label: 'Test'
    });
    expect(wrapper.props().label).toHaveLength(4);
  });
  it('Simulate Click Event', function () {
    var value = false;
    wrapper.setProps({
      label: 'Test',
      onClick: function onClick() {
        value = true;
      }
    });
    wrapper.find('li').simulate('click');
    expect(value).toBe(true);
  });
});