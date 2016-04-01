var React = require('react');
var Day = require('../components/Day');

var styles = {
	dayscon:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "50px auto",
	}
}

function DaysContainer(props){
	console.log("dayscon", props.list)
		return (
			<div style={styles.dayscon}>
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