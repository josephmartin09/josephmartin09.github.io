import React, { Component } from 'react';

const mainCompStyle = {
	width: '100%',
	display: 'inline-block'
}

const carouselPlaceholderStyle = {
	width: '100%',
	height: '400px',
	backgroundColor: 'grey'
}

class ImageCarousel extends Component {

  render() {

    return (
      <div style={mainCompStyle} >
       	<div style={carouselPlaceholderStyle} />
      </div>
    );
  }
}

export default ImageCarousel;
