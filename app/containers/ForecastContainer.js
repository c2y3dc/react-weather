var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../helpers/api').getForecast;
var PropTypes = React.PropTypes;

var ForecastContainer = React.createClass({
	contextType:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: true
		};
	},
	componentDidMount: function() {
		var city = this.props.location.state.city;
		console.log("before setState", this.state)
		console.log("location state city", city)
		getForecast(city).then(function(data){
			this.setState({
				isLoading: false
			})
		}.bind(this))
		console.log("after setState", this.state)
	},
	render: function(){
		return(
			<Forecast 
				isLoading={this.state.isLoading}
			/>
		)
	}
})

module.exports = ForecastContainer;