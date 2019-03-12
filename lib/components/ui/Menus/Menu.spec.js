"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Menu Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Menu.default, null));
  });
  it('Renders', function () {
    // Mock
    document.body.innerHTML = "\n      <div id=\"menu-anchor\"></div>\n    ";
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      data: ['First', '', 'Second'],
      open: true
    });
    expect(wrapper.props().data).toHaveLength(3);
    expect(wrapper.props().open).toBe(true);
  });
});