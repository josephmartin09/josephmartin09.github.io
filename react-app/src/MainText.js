import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
// SVG Icons
import People from 'material-ui/svg-icons/social/people';
import Work from 'material-ui/svg-icons/action/work';
import ContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import Description from 'material-ui/svg-icons/action/description';

const mainCompStyle = {
	display: 'inline-block',
	width: '100%',
	textAlign: 'center',
	paddingTop: 24
}

const paperStyle = {
  height: 300,
  width: 300,
  margin: 20,
  padding: 24,
  textAlign: 'center',
  display: 'inline-block'
}

const cardTitleStyle = {
	fontSize: 20
}

const headerMainStyle = {
	fontSize: 30
} 

const headerSubStyle = {
	fontSize: 14
}

class MainText extends Component {

  render() {

    return (
      <div style={mainCompStyle} >

	    	{/* Banner Title */}
	    	<div style={headerMainStyle}>
	    		Electrical, Computer, and Software Engineering Services
	    	</div>
	    	<div style={headerSubStyle}>
	    		A Father-Son Company
	    	</div>

	    	{/* Links to stuff */}
	    	<div style={mainCompStyle}>
		    	<Paper style={paperStyle} zDepth={1} >
		    		<div style={cardTitleStyle} > About </div>
		    		<IconButton>
		    			<People />
		    		</IconButton>
		    	</Paper>

		    	<Paper style={paperStyle} zDepth={1} >
			    	<div style={cardTitleStyle}> Services </div>
		    		<IconButton>
		    			<Work />
		    		</IconButton>
		    	</Paper>

		    	<Paper style={paperStyle} zDepth={1} >
		    		<div style={cardTitleStyle}>Contact</div>
		    		<IconButton>
			    		<ContactPhone />
			    	</IconButton>
		    	</Paper>

		    	<Paper style={paperStyle} zDepth={1} >
		    		<div style={cardTitleStyle}> Blog (Coming Soon) </div>
		    		<IconButton>
			    		<Description />
			    	</IconButton>
		    	</Paper>

		    </div>

      </div>
    );
  }
}

export default MainText;
