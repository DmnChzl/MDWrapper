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
  it('Check Props', function () {
    wrapper.setProps({
      active: true,
      label: 'Done'
    });
    expect(wrapper.props().active).toBe(true);
    expect(wrapper.props().aligned).toBe(false);
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().label).toHaveLength(4);
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