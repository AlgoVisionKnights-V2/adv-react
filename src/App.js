import './App.css';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';

const axios = require('axios');

// This is a test api call. Call this in the App function if you want to communicate with the API.
const test = () => {
	const newbody = {
		obiwan: 'Hello there',
	};

	axios({
		method: 'POST',
		url: 'http://localhost:5000/algorithms/getAlgorithm',
		data: {
			name: 'bubblesort',
		},
		config: {
			headers: { 'Content-Type': 'application/json' },
		},
	}).then((response) => {
		console.log(response);
	});
};

function App() {
	return (
		<div className='App'>
			<Header />
			<Dashboard />
		</div>
	);
}

export default App;
