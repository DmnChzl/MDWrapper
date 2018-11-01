"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Typography = _interopRequireDefault(require("./Typography"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Typography Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Typography.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      element: 'h3',
      type: _constants.HEADLINE,
      size: 3
    });
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().element).toEqual('h3');
    expect(wrapper.props().type).toEqual(_constants.HEADLINE);
    expect(wrapper.props().size).toEqual(3);
  });
});