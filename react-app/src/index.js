import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ReactApp = () => (
	<BrowserRouter>
	  <MuiThemeProvider>
	  	<div className="App">
	    	<App />
	    </div>
	  </MuiThemeProvider>
	 </BrowserRouter>
);

ReactDOM.render(<ReactApp />, document.getElementById('root'));
registerServiceWorker();
