var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var getCurrentWeather = require('../helpers/api').getCurrentWeather;
var getForecast = require('../helpers/api').getForecast;

var GetCityContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired,
  },

  getDefaultProps: function(){
    return {
      direction: 'column',
    };
  },

  propTypes: {
    direction: PropTypes.string,
  },

  getInitialState: function(){
    return {
      isLoading: true,
      city: '',
    };
  },

  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value,
    });
  },

  handleSubmitCity: function(e){
    e.preventDefault();
    var city = this.state.city;
    this.context.router.push({
      pathname: '/forecast/' + city,
      state:{
        city: city
      }
    })
  },

  render: function(){
  	return(	
	  	<GetCity
	  		onSubmitCity={this.handleSubmitCity}
	  		onUpdateCity={this.handleUpdateCity}
	  		city={this.state.city}
	  		direction={this.props.direction}
	  	/>
	  )
  },
});

module.exports = GetCityContainer;
