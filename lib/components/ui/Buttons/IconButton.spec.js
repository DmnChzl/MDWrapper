"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _IconButton = _interopRequireDefault(require("./IconButton"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('IconButton Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_IconButton.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      disabled: true,
      font: _constants.DONE
    });
    expect(wrapper.props().classes).toHaveLength(0);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().font).toEqual(_constants.DONE);
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