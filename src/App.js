import './App.css';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

// Unity Webgl components for Unity test
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
	'build/build.json',
	'build/UnityLoader.js'
);

function App() {
	console.log(unityContent);
	return (
		<div className='App'>
			{/* <Navigation /> */}
			<Header />

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
