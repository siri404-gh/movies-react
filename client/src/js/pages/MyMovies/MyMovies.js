var React = require('react');
var NavBar = require('../../components/Navbar/Navbar');
var MyFavouriteMovies = require('../../components/MyFavouriteMovies/MyFavouriteMovies');

var Home = React.createClass({
  render: function() {
    return (
        <div>
            <NavBar/>
             <MyFavouriteMovies heading="My Favourites"/>
        </div>
    );
  }
});

module.exports = Home;
