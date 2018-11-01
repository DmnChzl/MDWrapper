"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Grid = _interopRequireDefault(require("./Grid"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Grid Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Grid.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      hAlign: _constants.LEFT,
      style: {
        margin: 10
      }
    });
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().hAlign).toEqual(_constants.LEFT);
    expect(wrapper.props().style).toBeDefined();
  });
});