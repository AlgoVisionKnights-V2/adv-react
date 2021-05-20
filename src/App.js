import './App.css';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

// Unity Webgl components
import Unity, { UnityContext } from 'react-unity-webgl';

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

const unityContext = new UnityContext({
	loaderUrl: 'UnityLoader.js',
	dataUrl: 'build.data.unityweb',
	frameworkUrl: 'build.wasm.framework.unityweb',
	codeUrl: 'build.wasm.code.unityweb',
});

function App() {
	return (
		<div className='App'>
			{/* <Navigation /> */}
			<Header />
			{/* <div>
				<Unity unityContext={unityContext} />
			</div> */}
			{/* <Dashboard /> */}
		</div>
	);
}

export default App;
