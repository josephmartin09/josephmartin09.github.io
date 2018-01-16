import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import SoundcloudWidget from './SoundcloudWidget';

const pageStyle = {
	display: 'inline-block',
	width: '100%',
	backgroundColor: 'black',
	textAlign: 'center'
}

const headerStyle = {
	color:'white',
	fontSize: 42
}

const textStyle = {
	color: 'white',
	fontSize: 26
}

const epTitleStyle = {
	color: 'turquoise',
}

const MainPage = () => {
	return (
		<div style={pageStyle}>
			<h1 style={headerStyle}> Joe Martin's Music </h1>
			<p style={textStyle}>
				A long time coming. <br /> 
				But I'm here. I'm finally here. <br />
				My first EP is titled <text style={epTitleStyle}> Loose Ends </text> <br />
			</p>

			<SoundcloudWidget />

			<SocialMediaIcons />

			<p style={textStyle}>
				Apple Music, Spotify, Google Music, Amazon and more coming soon <br />
				Thank you for listening!
			</p>

		</div>
	)
}

export default MainPage;