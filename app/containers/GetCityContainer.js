var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
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
      city: '',
    };
  },

  handleSubmitCity: function(){
    console.log(this.state.city);
  },

  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value,
    });
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
