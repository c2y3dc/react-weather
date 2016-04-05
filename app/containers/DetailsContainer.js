var React = require('react');
var getForecast = require('../helpers/utils').getForecast;
var Details = require('../components/Details');

var DetailsContainer = React.createClass({

	render: function(){
		console.log(this.props.location.state.weather)
		return (
			<div>
				<Details />
			</div>
		)
	}
})


module.exports = DetailsContainer;