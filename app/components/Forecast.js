var React = require('react');
var Loading = require('./Loading');
var PropTypes = React.PropTypes;

function Forecast(props) {
  return props.isLoading === true
		? <Loading text={'Fetching Forecast'} speed={50} />
		: <div> FORECAST CONTAINER </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

module.exports = Forecast;
