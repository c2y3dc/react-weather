var React = require('react');
var utils = require('../helpers/utils');

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
			<h2 style={styles.header}>{utils.getDate(props.date)}</h2>
		</div>
	)
}

module.exports = Day;