// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');
console.log(document);
// var jsdom = require('mocha-jsdom');
// var assert = require('assert');
// var React = require('react');
// var TestUtils = require('react-addons-test-utils');
// var SearchBar = require('../SearchBar.js');
// describe('Testing SearchBox Component', function() {
//     jsdom({ skipWindowCheck: true });
//
//     it('Should contain a search box', function() {
//
//         var SearchBar = TestUtils.renderIntoDocument(
//             <SearchBar/>
//         );
//
//         var input = TestUtils.scryRenderedDOMComponentsWithTag(
//             SearchBar, 'div'
//         );
//
//                 console.log(input);
//                         console.log(input.getDOMNode());
//     });
// });
