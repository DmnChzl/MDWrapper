"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _List = _interopRequireDefault(require("./List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('List Component', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_List.default, null));
  });
  it('Renders', function () {
    expect(wrapper.exists()).toBe(true);
  });
  it('Check Props', function () {
    wrapper.setProps({
      data: [{
        title: 'First',
        subTitle: 'Sub First'
      }, '', {
        leadingIcon: 'folder',
        title: 'Second',
        subTitle: 'Sub Second'
      }, '', {
        leadingIcon: 'folder',
        title: 'Three',
        subTitle: 'Sub Three',
        trailingIcon: 'info'
      }]
    });
    expect(wrapper.props().data).toHaveLength(5);
  });
});