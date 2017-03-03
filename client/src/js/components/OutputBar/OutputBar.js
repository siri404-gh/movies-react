var React = require('react');
var SingleMovie = require('../SingleMovie/SingleMovie');

var OutputBar = React.createClass({
    deleteFunc: function(id) {
        $.ajax({
            url:'http://localhost:8080/movie/'+id,
            type:'DELETE',
            success: function(res) {
                this.props.get();
            }.bind(this),
            error: function(res) {
                console.log(res);
            }
        });
    },
    addFunc: function(postData) {
        $.ajax({
            url:'http://localhost:8080/movie/',
            data: postData,
            type:'POST',
            success: function(res) {
                if(this.props.get) {
                    this.props.get();
                }
            }.bind(this),
            error: function(res) {
                console.log(res);
            }
        });
    },
    render: function() {
        console.log('Rendering OutputBar for '+this.props.heading);
        var movieList = [];
        var array = this.props.output;
        var self = this;
        array.forEach(function(movie) {
            var rating = movie.imdbRating || '7.8';
            movieList.push(<SingleMovie
                id={movie.imdbID}
                title={movie.Title}
                ratings={rating}
                year={movie.Year}
                poster={movie.Poster}
                addFunc={self.addFunc}
                deleteFunc={self.deleteFunc}
                heading={self.props.heading}/>);
        });
        return (
            <div>
                <h4>{this.props.heading}</h4>
                {
                    movieList.map(function(result, i) {
                      return <div key={i}>{result}</div>;
                  })
                }
            </div>
        );
    }
});

module.exports = OutputBar;
