var React = require('react');
var Day = require('../components/Day');


function DaysContainer(props){
	console.log("dayscon", props.list)
		return (
			<div>
				{props.list.map(function(day){
					return (
						<Day 
							key={day.id} 
							date={day.dt}
							condition={day.weather[0].icon}>
							{day.weather[0].main}
						</Day> 
					)
				})}
			</div>
		)
}

module.exports = DaysContainer;