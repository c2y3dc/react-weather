var React = require('react');
var Loading = require('./Loading');
var PropTypes = React.PropTypes;
// var DaysContainer = require('../containers/DaysContainer');
var utils = require('../helpers/utils');

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}


function DayItem(props){
	var date = utils.getDate(props.day.dt);
	var icon = props.day.weather[0].icon;
	return(
		<div onClick={props.handleClick} style={styles.dayContainer}>
			<img style={styles.weather} src={'./app/images/weather-icons/'+ icon + '.svg'} alt='Weather' />
			<h2 style={styles.subheader}>{date}</h2>
		</div>
	)
}


function ForecastUI(props){
	return (
		<div style={{textAlign: 'center'}}>
			<h1 style={styles.header}>{props.city}</h1>
			<p style={styles.subheader}> Select a Day </p>
			<div style={styles.container}>
				{props.forecast.list.map(function(listItem){
					return (
						<DayItem 
							key={listItem.dt} 
							day={listItem} 
							handleClick={props.handleClick.bind(null, listItem)}
						/>
						)
				})}
			</div>
		</div>
	)
}

// var Forecast = React.createClass({
// 	contextTypes:{
// 		router: React.PropTypes.object.isRequired
// 	},
// 	propTypes:{
// 		isLoading: PropTypes.bool.isRequired,
//   	city: PropTypes.string.isRequired,
//   	forecastData: PropTypes.object.isRequired
// 	},
// 	// getInitialState: function(){
// 	// 	return {
// 	// 		detailsData: {},
// 	// 		city: ''
// 	// 	};
// 	// },
// 	handleClick: function(e){
// 		e.preventDefault();
// 		console.log("I done got clicked", this.props)
// 		// this.setState({
// 		// 	detailsData: this.props.forecastData
// 		// })
// 		this.context.router.push({
// 			pathname:'/detail/' + this.props.city
// 		})
// 	},
// 	render: function(){
// 	  return (
// 	  	<div>
// 	  		{
// 	  			this.props.isLoading === true
// 						? <Loading text={'Fetching'} speed={50} />
// 						: <ForecastUI list={this.props.forecastData} handleClick={this.handleClick}/>
// 				}		
// 			</div>
// 		)
// 	}
// })

function Forecast(props){
	return (
		<div>
			{
				props.isLoading === true
					? <Loading text={'Fetching'} speed={50} />
					: <ForecastUI
							city={props.city}
							forecast={props.forecastData}
							handleClick={props.handleClick} />
			}
		</div>

	)
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

module.exports = Forecast;
