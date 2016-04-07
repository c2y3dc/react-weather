import React from 'react'
import {getDate, convertToC, convertToF} from '../helpers/utils'
import DayItem from './DayItem'

const styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Details(props){
	const icon = props.day.weather[0].icon;
	const desc = props.day.weather[0].description;
	const city = props.city;
	const date = getDate(props.day.dt);
	const minT = convertToC(props.day.temp.min);
	const maxT = convertToC(props.day.temp.max);

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

export default Details