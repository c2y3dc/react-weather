var React = require('react');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

var Main = function(props){
	return(
		<div style={styles.container}>
			<h1>Main.js Header</h1>
			{props.children}
		</div>
	)
}

module.exports = Main;