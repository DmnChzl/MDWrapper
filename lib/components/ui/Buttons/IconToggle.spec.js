"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _IconToggle = _interopRequireDefault(require("./IconToggle"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('IconToggle Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_IconToggle.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      disabled: true,
      fontOff: _constants.DONE_OUTLINE,
      fontOn: _constants.DONE,
      labelOff: 'ToDo',
      labelOn: 'Done'
    });
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().fontOff).toEqual(_constants.DONE_OUTLINE);
    expect(wrapper.props().fontOn).toEqual(_constants.DONE);
    expect(wrapper.props().labelOff).toHaveLength(4);
    expect(wrapper.props().labelOn).toHaveLength(4);
  });
  it('Simulate Click Event', function () {
    var value = false;
    wrapper.setProps({
      onClick: function onClick() {
        value = true;
      }
    });
    wrapper.find({
      role: 'button'
    }).simulate('click');
    expect(value).toBe(true);
  });
});