var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../helpers/utils');
var getDate = utils.getDate;

var styles = {
	dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  weather: {
    height: 130
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
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

DayItem.propTypes = {
	day: PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.array.isRequired
	}).isRequired,
	handleClick: PropTypes.func
}


module.exports = DayItem;