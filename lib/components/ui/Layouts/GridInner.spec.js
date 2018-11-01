"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _GridInner = _interopRequireDefault(require("./GridInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('GridInner Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_GridInner.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      style: {
        margin: 10
      }
    });
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().style).toBeDefined();
  });
});