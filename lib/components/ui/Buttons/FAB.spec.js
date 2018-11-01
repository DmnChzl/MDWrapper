"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FAB = _interopRequireDefault(require("./FAB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FAB Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_FAB.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      label: 'Test'
    });
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().label).toHaveLength(4);
    expect(wrapper.props().mini).toBe(false);
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