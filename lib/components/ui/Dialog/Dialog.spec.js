"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Dialog = _interopRequireDefault(require("./Dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dialog Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_Dialog.default, null, "Test"));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true); // expect(wrapper).toMatchSnapshot();
  });
  it('Check Props', function () {
    wrapper.setProps({
      title: 'Test'
    });
    expect(wrapper.props().children).toHaveLength(4);
    expect(wrapper.props().open).toBe(false);
    expect(wrapper.props().title).toHaveLength(4);
  });
  it('Update Hook', function () {
    wrapper.setProps({
      open: true
    });
    expect(wrapper.props().open).toBe(true);
  });
});