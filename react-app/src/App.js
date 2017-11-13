import React from 'react';
import { Switch, Route } from 'react-router-dom'
// Custom Components
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUs';
import NoPage from './NoPage';

const mainCompStyle = {
	display: 'inline-block',
	width: '100%',
	textAlign: 'center'
}

const App = () => (
	<main>
		<Navbar />
		<div style={mainCompStyle}>
	    <Switch>
	      <Route exact path='/' component={Home} />
	      <Route exact path='/about' component={About} />
	      <Route exact path='/services' component={Services} />
	      <Route exact path='/contact' component={ContactUs} />
	      <Route component={NoPage} />
	    </Switch>
	   </div>
  </main>		
)

export default App