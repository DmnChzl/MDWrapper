"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ThemeProvider = _interopRequireDefault(require("./ThemeProvider"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR = '#f44336';
var PRIMARY = '#3700b3';
var SECONDARY = '#03dac6';
describe('ThemeProvider Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_ThemeProvider.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      error: ERROR,
      primary: PRIMARY,
      secondary: SECONDARY
    });
    expect(wrapper.props().background).toEqual(_constants.WHITE);
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().error).toEqual(ERROR);
    expect(wrapper.props().onError).toEqual(_constants.WHITE);
    expect(wrapper.props().onPrimary).toEqual(_constants.WHITE);
    expect(wrapper.props().onSecondary).toEqual(_constants.BLACK);
    expect(wrapper.props().onSurface).toEqual(_constants.BLACK);
    expect(wrapper.props().primary).toEqual(PRIMARY);
    expect(wrapper.props().secondary).toEqual(SECONDARY);
    expect(wrapper.props().surface).toEqual(_constants.WHITE);
  });
});