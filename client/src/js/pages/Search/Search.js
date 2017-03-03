var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var MyMovieSearch = require('../../components/MyMovieSearch/MyMovieSearch');

var Home = React.createClass({
  render: function() {
    return (
        <div>
            <NavBar/>
            <MyMovieSearch/>
        </div>
    );
  }
});

module.exports = Home;
