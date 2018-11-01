"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _jsdom = require("jsdom");

require("mutationobserver-shim");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
var dom = new _jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document; // FIX: TypeError: MutationObserver

global.MutationObserver = window.MutationObserver;