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
			isLoading: true,
			forecastData: {}
		};
	},
	componentDidMount: function() {
		var city = this.props.location.state.city;
		this.makeRequest(city);
	},
	componentWillReceiveProps: function(nextProps) {
		this.makeRequest(nextProps.routeParams.city)
	},
	makeRequest: function(city){
		getForecast(city)
			.then(function(forecastData){
				console.log(forecastData);
				this.setState({
					isLoading: false,
					forecastData: forecastData
				})
		}.bind(this))		
	},
	render: function(){
		return(
			<Forecast
				city={this.props.location.state.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData}
			/>
		)
	}
})

module.exports = ForecastContainer;