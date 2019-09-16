var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
require('babel-polyfill');

enzyme.configure({ adapter: new Adapter() });
