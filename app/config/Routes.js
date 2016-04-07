import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router' 
import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DetailsContainer from '../containers/DetailsContainer'

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path='forecast/:city' header=':city' component={ForecastContainer} />
			<Route path='detail/:city' header=':city' component={DetailsContainer} />
		</Route>
	</Router>
)

export default routes