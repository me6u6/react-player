import React from 'react';
import './Header.css';
import Logo from './img/logo.png';
import Logo1 from './img/logo_1.png';

const Header = () => {
	return(
		<div className="Header">
		    <div className="Logo">
		        <img src={Logo1} alt="emergency call" />
		    </div>
		    <div className="Line">
		        <h2>ざっくりAWSを理解する</h2>
		    </div>
		</div>
	);
};

export default Header;
