import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import 'mutationobserver-shim';

configure({ adapter: new Adapter() });

const dom = new JSDOM(
  '<!doctype html><html><body></body></html>'
);

global.window = dom.window;
global.document = dom.window.document;

// FIX: TypeError: MutationObserver
global.MutationObserver = window.MutationObserver;
