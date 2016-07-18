var React = require('react');
var OutputBar = require('../OutputBar/OutputBar');

var MyFavouriteMovies = React.createClass({
    getInitialState: function() {
        return {
            list: []
        };
    },
    getMovieList: function() {
        console.log('Initiating getMovieList() ajax request to db');
        var myList = [];
        var self = this;
        $.get('http://localhost:8080/movie/')
        .done(function(data) {
            console.log('Getting list of movies from db', data);
            data.forEach(function(movie){
                myList.push(movie);
            });
            self.setState({
                list: myList
            });
        });
    },
    componentDidMount: function() {
        this.getMovieList();
    },
    render: function() {
        console.log('Rendering MyFavouriteMovies');
        return (
            <OutputBar output={this.state.list} get={this.getMovieList}/>
        );
    }
});

module.exports = MyFavouriteMovies;
