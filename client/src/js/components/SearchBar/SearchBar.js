var React = require('react');
var SearchBar = React.createClass({
    getInitialState: function() {
        return {
            value: ''
        }
    },
    handleChange: function(ev) {
        this.setState({
          value: ev.target.value
        });
    },
    fetchResults: function(ev) {
        ev.preventDefault();
        value = this.state.value;
        console.log('Search String = '+ value);
        this.props.fetcher(value);
    },
    render: function() {
        console.log('Rendering SearchBar');
        return (
            <div className='row row-margin my-row search-row'>
                <form className="navbar-form navbar-left" role="search" onSubmit={this.fetchResults}>
                    <div className="input-group add-on">
                        <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" value={this.state.value} onChange={this.handleChange}/>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.fetchResults}><i className="glyphicon glyphicon-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = SearchBar;
