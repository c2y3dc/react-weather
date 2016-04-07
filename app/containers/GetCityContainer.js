import React, {PropTypes, Component} from 'react'
import GetCity from '../components/GetCity'
// import {getCurrentWeather, getForecast} from '../helpers/api'

class GetCityContainer extends Component{
  constructor(){
    super()
    this.state = {
      isLoading: true,
      city: '',
    };
  }

  handleUpdateCity(e){
    this.setState({
      city: e.target.value,
    });
  }

  handleSubmitCity(e){
    e.preventDefault();
    var city = this.state.city;
    this.context.router.push({
      pathname: '/forecast/' + city,
      state:{
        city
      }
    })
  }

  render(){
    return( 
      <GetCity
        onSubmitCity={(e) => this.handleSubmitCity(e)}
        onUpdateCity={(e) => this.handleUpdateCity(e)}
        city={this.state.city}
        direction={this.props.direction}
      />
    )
  }
}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
GetCityContainer.propTypes = {
  direction: PropTypes.string,
}
GetCityContainer.defaultProps = {
  direction: 'column',
}
export default GetCityContainer