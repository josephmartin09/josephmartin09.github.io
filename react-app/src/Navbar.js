import React, { Component } from 'react';

const navbarStyle = {
	height: '72px',
	display: 'inline-block',
	width: '100%',
	backgroundColor: '#222222',
	boxShadow: '8px 8px 8px #e2e2e2'
}

const titleText = 'JMartin Technology'
const titleStyle = {
	color: '#e4e4e4',
	height: '100%',
	fontSize: '30px',
	marginLeft: '18px',
	marginTop: '18px'
}

class Navbar extends Component {

  render() {

    return (
      <div style={navbarStyle} >
      	<div style={titleStyle}> {titleText} </div>
      </div>
    );
  }
}

export default Navbar;
