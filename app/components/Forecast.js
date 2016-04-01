var React = require('react');
var Loading = require('./Loading');
var PropTypes = React.PropTypes;
var DaysContainer = require('../containers/DaysContainer');

var styles = {
	container: {
		backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
	},
	header: {		
		textAlign: 'center',
		// position: 'absolute',
		width: '100%',
    color: '#333',
    fontWeight: 100,
    marginTop: "50px"
  },
}

function Forecast(props) {
	console.log(props.forecastData.list)
  return props.isLoading === true
		? <Loading text={'Fetching'} speed={50} />
		: <div>
				<h1 style={styles.header}>{props.city}</h1>
				<h3 style={styles.header}>Select a day</h3>
				<DaysContainer list={props.forecastData.list}/>
			</div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired
};

module.exports = Forecast;
