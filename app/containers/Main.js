import React from 'react'
import GetCityContainer from './GetCityContainer'

const styles = {
  container: {
    width: '100%',
    height: '92%',
  },
  header:{
  	display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  },
};

const Main = function (props) {
  return (
	  <div style={styles.container}>
		  <div style={styles.header}>
			  <p style={{margin: 0}}>React Weather Station</p>
			  <GetCityContainer direction="row" />
		  </div>
		  {props.children}
		</div>
  );
};

export default Main
