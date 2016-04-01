var React = require('react');
var UTS = require('unix-timestamp');

var styles = {
	daycon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "35px",
	},
	icon:{
		height: "130px"
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

function getSrc(icon){
	return "app/images/weather-icons/" + icon +".svg"
}

function Day(props){
	return(
		<div style={styles.daycon}>
			<img style={styles.icon} src={getSrc(props.condition)}/>
			<h2 style={styles.header}>{UTS.toDate(props.date).toString().substr(0,3)}</h2>
		</div>
	)
}

module.exports = Day;