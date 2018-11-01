"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tab = _interopRequireDefault(require("./Tab"));

var _TabIndicator = _interopRequireDefault(require("./TabIndicator"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tab Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tab.default, null, _react.default.createElement(_TabIndicator.default, null)));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      icon: _constants.DONE,
      label: 'Done',
      stacked: true
    });
    var tabIndicator = (0, _enzyme.mount)(wrapper.props().children);
    expect(wrapper.props().active).toBe(false);
    expect(tabIndicator.instance()).toBeInstanceOf(_TabIndicator.default);
    expect(wrapper.props().icon).toEqual(_constants.DONE);
    expect(wrapper.props().label).toHaveLength(4);
    expect(wrapper.props().stacked).toBe(true);
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