var React = require('react');
var utils = require('../helpers/utils');
var DayItem = require('./DayItem');


var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Details(props){
	var icon = props.day.weather[0].icon;
	var desc = props.day.weather[0].description;
	var city = props.city;
	var date = utils.getDate(props.day.dt);
	var minT = utils.convertToC(props.day.temp.min);
	var maxT = utils.convertToC(props.day.temp.max);

	return (
		<div styles={styles.container}>
			<DayItem day={props.day}/>
			<div style={styles.descriptionContainer}>
				<p>{props.city}</p>
				<p>{desc}</p>
				<p>{"Min Temp: " + minT + " Celsius"}</p>
				<p>{"Max Temp: " + maxT + " Celsius"}</p>
				<p>{"Humidity: " + props.day.humidity + "%"}</p>
			</div>
		</div>
	)
}

module.exports = Details;