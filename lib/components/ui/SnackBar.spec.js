"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SnackBar = _interopRequireDefault(require("./SnackBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SnackBar Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SnackBar.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  describe('Check Props', function () {
    it('Return Default', function () {
      wrapper.setProps({
        label: 'Done',
        open: true
      });
      expect(wrapper.props().children).toHaveLength(4);
      expect(wrapper.props().label).toHaveLength(4);
      expect(wrapper.props().leading).toBe(false);
      expect(wrapper.props().open).toBe(true);
      expect(wrapper.props().stacked).toBe(false);
    });
    it('Return Stacked', function () {
      wrapper.setProps({
        stacked: true
      });
      expect(wrapper.props().stacked).toBe(true);
    });
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