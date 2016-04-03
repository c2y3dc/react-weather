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
		<div style={styles.dayContainer}>
			<img style={styles.weather} src={'./app/images/weather-icons/'+ icon + '.svg'} alt='Weather' />
			<h2 style={styles.subheader}>{date}</h2>
		</div>
	)
}


function ForecastUI(props){
	return (
		<div>
			<h1 style={styles.header}>{props.list.city.name}</h1>
			<div style={styles.container}>
				{props.list.list.map(function(listItem){
					return <DayItem key={listItem.dt} day={listItem} />
				})}
			</div>
		</div>
	)
}

function Forecast(props) {
  return (
  	<div>
  		{
  			props.isLoading === true
					? <Loading text={'Fetching'} speed={50} />
					: <ForecastUI list={props.forecastData}/>
			}		
		</div>
	)
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired
};

module.exports = Forecast;
