var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../helpers/api').getForecast;
var PropTypes = React.PropTypes;

var ForecastContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired,
	},
	handleClick: function(weather){
		var city = this.props.routeParams.city
		this.context.router.push({
			pathname:'/detail/' + city,
			state: {
				weather: weather,
				city: city
			}
		})
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
				// console.log(forecastData);
				this.setState({
					isLoading: false,
					forecastData: forecastData
				})
		}.bind(this))		
	},
	render: function(){
		return(
			<Forecast
				city={this.props.routeParams.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData}
				handleClick={this.handleClick}
			/>
		)
	}
})

module.exports = ForecastContainer;