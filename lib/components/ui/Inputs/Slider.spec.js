"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Slider = _interopRequireDefault(require("./Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Slider Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Slider.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      discrete: true,
      displayMarkers: true,
      max: 42,
      min: 24
    });
    expect(wrapper.props().disabled).toBe(false);
    expect(wrapper.props().discrete).toBe(true);
    expect(wrapper.props().displayMarkers).toBe(true);
    expect(wrapper.props().max).toEqual(42);
    expect(wrapper.props().min).toEqual(24);
    expect(wrapper.props().step).toEqual(1);
    expect(wrapper.props().value).toBeUndefined();
    expect(wrapper.find({
      role: 'slider'
    }).prop('aria-valuenow')).toEqual("".concat((wrapper.props().min + wrapper.props().max) / 2));
  });
  it('Test Internal Method', function () {
    var value = 0;
    wrapper.setProps({
      onChange: function onChange(val) {
        value = val;
      },
      value: 50
    });
    wrapper.instance().handleChange();
    expect(value).toEqual(50);
  });
});