import React, {PropTypes} from 'react'
import Loading from './Loading'
import DayItem from './DayItem'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
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
}

function ForecastUI({city, forecast, handleClick}){
	return (
		<div style={{textAlign: 'center'}}>
			<h1 style={styles.header}>{city}</h1>
			<p style={styles.subheader}> Select a Day </p>
			<div style={styles.container}>
				{forecast.list.map(function(listItem){
					return (
						<DayItem 
							key={listItem.dt} 
							day={listItem} 
							handleClick={handleClick.bind(null, listItem)}
						/>
						)
				})}
			</div>
		</div>
	)
}

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

export default Forecast
