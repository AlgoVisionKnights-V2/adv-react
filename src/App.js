import './App.css';
import React from 'react';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import AlgorithmPage from './components/algorithmPage/AlgorithmPage';

function App() {
	// Drawer setters
	const [open, setOpen] = React.useState(false);

	// PageToggler: Set to true if you want to see them
	const [page, setPage] = React.useState('dashboard');

	// Visualizer and Information page toggler
	const [algoPage, setAlgoPage] = React.useState('visualizer');

	// Open or close drawer
	const toggleDrawer = (event) => {
		setOpen(!open);
	};

	return (
		<div className='App'>
			<Navigation
				open={open}
				toggleDrawer={toggleDrawer}
				setPage={setPage}
				setAlgoPage={setAlgoPage}
			/>
			<div className='Main'>
				<Header
					toggleDrawer={toggleDrawer}
					page={page}
					setPage={setPage}
					setAlgoPage={setAlgoPage}
					algoPage={algoPage}
				/>

				{page === 'dashboard' ? (
					<Dashboard />
				) : (
					<AlgorithmPage page={page} algoPage={algoPage} />
				)}
			</div>
		</div>
	);
}

// ! This is a test api call. Call this in the App function if you want to communicate with the API.
// const axios = require('axios');

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
// 		// setMarkdown(response.data.file);
// 	});
// };
export default App;
