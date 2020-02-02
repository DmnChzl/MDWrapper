"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectMenu = _interopRequireDefault(require("./SelectMenu"));

var _constants = require("../../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SelectMenu Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SelectMenu.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true);
  });
  describe('Check Props', function () {
    it('Return Default', function () {
      wrapper.setProps({
        data: ['Hello', 'World'],
        helper: 'Need Help ?',
        icon: _constants.DONE,
        label: 'Test'
      });
      expect(wrapper.props().data).toHaveLength(2);
      expect(wrapper.props().disabled).toBe(false);
      expect(wrapper.props().helper).toBeDefined();
      expect(wrapper.props().icon).toEqual(_constants.DONE);
      expect(wrapper.props().label).toHaveLength(4);
      expect(wrapper.props().outlined).toBe(false);
    });
    it('Return Outlined', function () {
      wrapper.setProps({
        label: 'Test',
        outlined: true
      });
      expect(wrapper.props().label).toHaveLength(4);
      expect(wrapper.props().outlined).toBe(true);
    });
  });
  it('Simulate Click Event', function () {
    var value = false;
    wrapper.setProps({
      data: ['Hello', 'World'],
      onClick: function onClick() {
        value = true;
      }
    });
    wrapper.find('li').forEach(function (node) {
      node.simulate('click');
    });
    expect(value).toBe(true);
  });
});