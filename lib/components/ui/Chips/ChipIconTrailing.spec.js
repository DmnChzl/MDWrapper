"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ChipIconTrailing = _interopRequireDefault(require("./ChipIconTrailing"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ChipIconTrailing Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_ChipIconTrailing.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      font: _constants.DONE
    });
    expect(wrapper.props().font).toEqual(_constants.DONE);
  });
  it('Simulate Click Event', function () {
    var value = false;
    wrapper.setProps({
      icon: _constants.DONE,
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