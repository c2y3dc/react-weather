import React, {Component} from 'react'
import Details from '../components/Details'

function DetailsContainer(props) {
	return (
		<div>
			<Details day={props.location.state.weather} city={props.location.state.city}/>
		</div>
	)
}

export default DetailsContainer