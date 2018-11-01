"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _LinearProgress = _interopRequireDefault(require("./LinearProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('LinearProgress Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_LinearProgress.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      buffered: true,
      value: 50
    });
    expect(wrapper.props().buffered).toBe(true);
    expect(wrapper.props().indeterminate).toBe(false);
    expect(wrapper.props().reversed).toBe(false);
    expect(wrapper.props().value).toEqual(50);
  });
});