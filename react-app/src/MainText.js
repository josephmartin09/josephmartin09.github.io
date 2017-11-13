import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Paper from 'material-ui/Paper';
// SVG Icons
import People from 'material-ui/svg-icons/social/people';
import Work from 'material-ui/svg-icons/action/work';
import ContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import Description from 'material-ui/svg-icons/action/description';
// Buttons
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

const paperStyle = {
  height: 300,
  width: 300,
  margin: 20,
  padding: 24,
  textAlign: 'center',
  display: 'inline-block'
}

const mainStyle = {
	backgroundColor: 'green'
}

const cardTitleStyle = {
	fontSize: 20
}

const headerMainStyle = {
	fontSize: 30,
	paddingTop: 24 // Just to give separation from the image carousel
} 

const headerSubStyle = {
	fontSize: 14
}

class MainText extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirectTo: null
		}
	}

	routeTo = (route) => {
		this.setState({redirectTo: route})
	}

  render() {

  	// Ew
  	if (this.state.redirectTo != null) {
  		return (<Redirect push to={this.state.redirectTo} />)
  	}

    return (
      <div>

	    	{/* Banner Title */}
	    	<div style={headerMainStyle}>
	    		Electrical, Computer, and Software Engineering Services
	    	</div>
	    	<div style={headerSubStyle}>
	    		A Father-Son Company
	    	</div>

	    	{/* Links to stuff */}
	    	<div>
		    	<Paper style={paperStyle} zDepth={1} >
		    		<div style={cardTitleStyle} > About </div>
		    		<IconButton onClick={this.routeTo.bind(this, "/about")} >
		    			<People />
		    		</IconButton>
		    		<div />
		    		<FlatButton label="More" onClick={this.routeTo.bind(this, "/about")} />
		    	</Paper>

		    	<Paper style={paperStyle} zDepth={1} >
			    	<div style={cardTitleStyle}> Services </div>
		    		<IconButton onClick={this.routeTo.bind(this, "/services")}>
		    			<Work />
		    		</IconButton>
		    		<div />
						<FlatButton label="More" onClick={this.routeTo.bind(this, "/services")} />
		    	</Paper>

		    	<Paper style={paperStyle} zDepth={1} >
		    		<div style={cardTitleStyle}>Contact</div>
		    		<IconButton onClick={this.routeTo.bind(this, "/contact")}>
			    		<ContactPhone />
			    	</IconButton>
			    	<div />
			    	<FlatButton label="More" onClick={this.routeTo.bind(this, "/contact")} />
		    	</Paper>

		    	<Paper style={paperStyle} zDepth={1} >
		    		<div style={cardTitleStyle}> Blog (Coming Soon) </div>
		    		<IconButton>
			    		<Description />
			    	</IconButton>
			    	<div />
			    	<FlatButton label="More" />
		    	</Paper>
		    </div>
      </div>
    );
  }
}

export default MainText;
