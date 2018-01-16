import React from 'react';

const textStyle = {display: 'inline-block', maxWidth: 640, width: '100%', padding: 24}
let renderPlaylist = window.innerWidth >= 640;

const SoundcloudWidget = () => {

	if (renderPlaylist == true) {
		return (
			<div style={textStyle} >
				<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/423611627&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
			</div>
		)
	} else {
		return (
			<div />
		)
	}
}

export default SoundcloudWidget;