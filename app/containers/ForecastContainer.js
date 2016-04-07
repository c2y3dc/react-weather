import React, { PropTypes, Component } from 'react'
import Forecast from '../components/Forecast'
import {getForecast} from '../helpers/api'

class ForecastContainer extends Component{
	constructor() {
		super()
		this.state = {
			isLoading: true,
			forecastData: {}
		};
	}
	componentDidMount() {
		const city = this.props.location.state.city;
		this.makeRequest(city);
	}
	componentWillReceiveProps(nextProps) {
		this.makeRequest(nextProps.routeParams.city)
	}
	async makeRequest(city){
		const forecastData = await getForecast(city)
		this.setState({
			isLoading: false,
			forecastData
		})		
	}
	handleClick(weather){
		const city = this.props.routeParams.city
		this.context.router.push({
			pathname:'/detail/' + city,
			state: {
				weather,
				city
			}
		})
	}
	render(){
		return(
			<Forecast
				city={this.props.routeParams.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData}
				handleClick={(weather) => this.handleClick(weather)}
			/>
		)
	}
}

ForecastContainer.contextTypes = {
	router: React.PropTypes.object.isRequired,
}

export default ForecastContainer