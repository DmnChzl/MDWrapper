"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TopBar = _interopRequireDefault(require("./TopBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TopBar Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_TopBar.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      collapsed: true,
      short: true,
      title: 'Test'
    });
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().collapsed).toBe(true);
    expect(wrapper.props().dense).toBe(false);
    expect(wrapper.props().fixed).toBeFalsy();
    expect(wrapper.props().prominent).toBe(false);
    expect(wrapper.props().short).toBe(true);
    expect(wrapper.props().title).toHaveLength(4);
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