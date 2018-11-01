"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _GridCell = _interopRequireDefault(require("./GridCell"));

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('GridCell Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_GridCell.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      col: 6,
      style: {
        padding: 10
      },
      vAlign: _constants.TOP
    });
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().col).toEqual(6);
    expect(wrapper.props().style).toBeDefined();
    expect(wrapper.props().vAlign).toEqual(_constants.TOP);
  });
});