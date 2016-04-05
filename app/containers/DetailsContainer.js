var React = require('react');
var getForecast = require('../helpers/utils').getForecast;
var Details = require('../components/Details');

var DetailsContainer = React.createClass({

	render: function(){
		return (
			<div>
				<Details day={this.props.location.state.weather} city={this.props.location.state.city}/>
			</div>
		)
	}
})


module.exports = DetailsContainer;