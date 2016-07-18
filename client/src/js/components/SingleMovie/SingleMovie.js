var React = require('react');
var SingleMovie = React.createClass({
    getInitialState: function() {
        return {
            show: false,
            rating: 1
        }
    },
    ratingConverter: function(rating) {
        return Math.round(parseInt(rating)/2);
    },
    addToFavourites: function() {
        var ratingValue = (this.state.show)? (this.state.rating)*2 : this.props.ratings;
        var postData = {
            Title: this.props.title,
            Year: this.props.year,
            Poster: this.props.poster,
            imdbRating: ratingValue,
            imdbID: this.props.id
        };
        this.props.addFunc(postData);
        this.editRating();
    },
    editRating: function() {
        this.setState({
            show: !this.state.show
        });
    },
    delete: function() {
        this.props.deleteFunc(this.props.id);
    },
    handleChange: function(ev) {
        this.setState({
            rating: ev.target.value
        });
    },
    render: function() {
        console.log('Rendering SingleMovie');
        var starRating = [];
        if(!this.state.show) {
            var count = this.ratingConverter(this.props.ratings);
            for (var i=1; i<=5; i++) {
                if (i<=count) {
                    starRating.push(<span id={i} className='glyphicon glyphicon-star'></span>);
                } else {
                    starRating.push(<span id={i} className='glyphicon glyphicon-star-empty'></span>);
                }
            }
        }
        var input = (this.state.show)? <input type='number' min='1' max='5' className='small-input' value={this.state.rating} onChange={this.handleChange}/> : '';
        var RemoveButton = <button type="button" className="btn btn-default btn-danger" data-dismiss="modal" onClick={this.delete}>Remove</button>;
        return (
            <div className='row result-row my-row row-margin'>
                <div className='col-xs-4'>
                    <img className='img-responsive img-thumbnail my-thumbnail' src={this.props.poster}/>
                </div>
                <div className='col-xs-8'>
                    <h5>
                        {this.props.title}
                        ({this.props.year})<br/>
                        {
                            starRating.map(function(result, i) {
                                return <span key={i}>{result}</span>;
                            })
                        }
                    </h5>
                    <div className='row'>
                        <div className='col-xs-3'>
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target={"#myModal"+this.props.id}>View</button>
                        </div>
                        <div className='col-xs-3'>
                            {RemoveButton}
                        </div>
                    </div>
                </div>
                <div id={"myModal"+this.props.id} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.title}</h4>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    <div className='col-xs-4'>
                                        <img className='img-responsive img-thumbnail my-thumbnail' src={this.props.poster}/>
                                    </div>
                                    <div className='col-xs-8'>
                                        <b>Year</b>: {this.props.year}<br/>
                                        <div className='row'>
                                            <div className='col-xs-12'>
                                                <span><b>Ratings</b>: {input} {starRating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default btn-success" data-dismiss="modal" onClick={this.addToFavourites}>Add</button>
                                <button type="button" className="btn btn-default btn-warning" onClick={this.editRating}>Edit Rating</button>
                                {RemoveButton}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SingleMovie;
