import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

const App = () => {
	return(
		<div className="App">
			<Header />
			<Video />
			<Info />
			<Footer />
		</div>
	);
};

export default App;
