"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ListItem Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_ListItem.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true);
  });
  it('Check Props', function () {
    wrapper.setProps({
      leadingIcon: _constants.FOLDER,
      title: 'Test',
      subTitle: 'Sub Test',
      trailingIcon: _constants.INFO
    });
    expect(wrapper.props().leadingIcon).toEqual(_constants.FOLDER);
    expect(wrapper.props().title).toHaveLength(4);
    expect(wrapper.props().subTitle).toHaveLength(8);
    expect(wrapper.props().trailingIcon).toEqual(_constants.INFO);
  });
  it('Simulate Click Event', function () {
    var value = false;
    wrapper.setProps({
      title: 'Test',
      onClick: function onClick() {
        value = true;
      }
    });
    wrapper.find('li').simulate('click');
    expect(value).toBe(true);
  });
});