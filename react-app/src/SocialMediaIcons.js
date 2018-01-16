import React from 'react';
import { SocialIcons } from 'react-social-icons';

const urls = [
	'http://soundcloud.com/jvmsounds/sets/loose-ends',
  'http://twitter.com/jvmsounds',
  'http://instagram.com/jvmsounds',
  'http://snapchat.com/add/josephmartin09'
];

const SocialMediaIcons = () => {
	return (
		<div>
			<SocialIcons urls={urls} />
		</div>
	)
}

export default SocialMediaIcons;