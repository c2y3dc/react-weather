import React, {PropTypes} from 'react'
import {getDate} from '../helpers/utils'

const styles = {
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
	const date = getDate(props.day.dt);
	const icon = props.day.weather[0].icon;
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

export default DayItem