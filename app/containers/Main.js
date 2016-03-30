var React = require('react');

var Main = function(props){
	return(
		<div>
			<h1>Main.js Header</h1>
			{props.children}
		</div>
	)
}

module.exports = Main;