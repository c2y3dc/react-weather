var React = require('react');

var Home = React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row text-center">
							<form className="col-lg-8 col-offset-lg-4">
								<h2>Enter City and State!</h2>		
								  <div className="form-group">
								    <input className="form-control" id="city-state" placeholder="San Francisco, California" />
								  </div>
									<button type="button" className="btn btn-lg btn-success">Get Weather</button>
							</form>
				</div>
			</div>
		);
	}
});

module.exports = Home;
