var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./pages/Master/Master');
var Home = require('./pages/Home/Home');
var Search = require('./pages/Search/Search');
var MyMovies = require('./pages/MyMovies/MyMovies');

module.exports = (
        <Route>
            <Route handler={Master}>
                <DefaultRoute handler={Home} name="Home"/>
            </Route>
            <Route handler={Home} name="HomePage" path="/home"/>
            <Route handler={Search} name="SearchPage" path="/search"/>
            <Route handler={MyMovies} name="MyMoviesPage" path="/movies"/>
        </Route>
);
