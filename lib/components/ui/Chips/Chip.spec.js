"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Chip = _interopRequireDefault(require("./Chip"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Chip Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Chip.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  describe('Check Props', function () {
    it('Return Default', function () {
      expect(wrapper.props().children).toHaveLength(4);
    });
    it('Return Leading', function () {
      wrapper.setProps({
        icon: _constants.DONE
      });
      expect(wrapper.props().icon).toEqual(_constants.DONE);
    });
    it('Return Trailing', function () {
      wrapper.setProps({
        icon: _constants.DONE,
        onClick: function onClick() {
          console.log('Test');
        }
      });
      expect(wrapper.props().icon).toEqual(_constants.DONE);
      expect(wrapper.props().onClick).toBeDefined();
    });
  });
});