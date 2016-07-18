var React = require('react');
var SearchBar = require('../SearchBar/SearchBar');
var OutputBar = require('../OutputBar/OutputBar');

var MyMovieSearch = React.createClass({
    getInitialState: function() {
        return {
            list: []
        }
    },
    fetch: function(value) {
        var self = this;
        var movieList = [];
        $.get("http://www.omdbapi.com/?", {t: value})
        .done(function(data) {
            if(!data.Error) {
                movieList.push(data);
                self.setState({
                    list: movieList
                });
            } else {
                console.error(data.Error);
            }
        });
    },
    render: function() {
        return (
            <div>
                <SearchBar fetcher={this.fetch}/>
                <OutputBar output={this.state.list}/>
            </div>
        );
    }
});

module.exports = MyMovieSearch;
