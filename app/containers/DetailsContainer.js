var React = require('react');
var getForecast = require('../helpers/utils').getForecast;
var Details = require('../components/Details');

var DetailsContainer = React.createClass({

	render: function(){
		return (
			<div>
				<Details />
			</div>
		)
	}
})


module.exports = DetailsContainer;