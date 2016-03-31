var React = require('react');
var PropTypes = React.PropTypes;
	
function InputField(props){
	return(	
		<input 
			type="text" 
			className="form-control" 
			placeholder="St. George, Utah"
			value={props.city}
			onChange={props.onUpdateCity}
		/>
	)
}

function Button(props){
	return(
		<button 
			style={{margin: 10}}
			type="button" 
			className="btn btn-success"
			onClick={props.onSubmitCity}
			>
				{props.children}
			</button>
	)
}

function getStyles(props){
	return {
		display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
	}
}

function GetCity(props) {
	return (
		<div style={getStyles(props)}>
			<InputField 
				onUpdateCity={props.onUpdateCity}
				city={props.city} />
			<Button 
				onSubmitCity={props.onSubmitCity}>
					Get Weather
			</Button>
		</div>
	)
}

GetCity.propTypes = {
	onSubmitCity: PropTypes.func.isRequired,
	onUpdateCity: PropTypes.func.isRequired,
	city: PropTypes.string.isRequired,
	direction: PropTypes.string
}

module.exports = GetCity;
