import React from 'react';
import './Footer.css';
import Logo from './img/logo.png';

const Footer = () => {
	return (
		<div className="Footer">
		    <div className="Img01">
		        <a href='mailto:info@example.com?subject=問い合わせ/バグの報告&amp;body=ご記入ください'>
		            <img src={Logo} alt="emergency call" />
		        </a>
		    </div>
		    <div className="Copyright">
			<p>@ 2022 まなべる</p>
		    </div>
		</div>
	);
};

export default Footer;

