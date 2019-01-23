"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectMenuIcon = _interopRequireDefault(require("./SelectMenuIcon"));

var _constants = require("../../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SelectMenuIcon Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SelectMenuIcon.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true);
  });
  it('Check Props', function () {
    wrapper.setProps({
      font: _constants.DONE
    });
    expect(wrapper.props().font).toEqual(_constants.DONE);
  });
});