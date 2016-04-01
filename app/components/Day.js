var React = require('react');
var UTS = require('unix-timestamp');

function getSrc(icon){
	return "app/images/weather-icons/" + icon +".svg"
}

function Day(props){
	return(
		<div>
			<img src={getSrc(props.condition)}/>
			<h2>{UTS.toDate(props.date).toString().substr(0,3)}</h2>
		</div>
	)
}

module.exports = Day;