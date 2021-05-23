import './App.css';
import React from 'react';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

// Unity Webgl components for Unity test
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
	'build/test/build.json',
	'build/test/UnityLoader.js'
);

function App() {
	// Drawer setters
	const [open, setOpen] = React.useState(true);

	// Open or close drawer
	const toggleDrawer = () => {
		setOpen(!open);
		console.log('Toggle');
	};

	return (
		<div className='App'>
			<Navigation open={open} />
			<div className='Main'>
				<Header toggleDrawer={toggleDrawer} />
				<Dashboard />
			</div>
			{/* Uniy Test */}
			{/* <Unity className='Unity' unityContent={unityContent} /> */}
		</div>
	);
}

// const axios = require('axios');

// This is a test api call. Call this in the App function if you want to communicate with the API.
// const test = () => {
// 	axios({
// 		method: 'POST',
// 		url: 'http://localhost:5000/algorithms/getAlgorithm',
// 		data: {
// 			name: 'bubblesort',
// 		},
// 		config: {
// 			headers: { 'Content-Type': 'application/json' },
// 		},
// 	}).then((response) => {
// 		console.log(response);
// 	});
// };

export default App;
