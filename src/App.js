import './App.css';
import React from 'react';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

// Markdown controls
import MarkdownPreview from '@uiw/react-markdown-preview';
import source from './test.md';

// Unity Webgl components for Unity test
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
	'build/test/build.json',
	'build/test/UnityLoader.js'
);

const axios = require('axios');

function App() {
	// Drawer setters
	const [open, setOpen] = React.useState(true);

	// PageToggler: Set to true if you want to see them
	const [algoPage, setAlgoPage] = React.useState(true);

	// Markdown Renderer test
	const [markdown, setMarkdown] = React.useState('');
	// React.useEffect(() => {
	// 	fetch(source)
	// 		.then((res) => res.text())
	// 		.then((text) => {
	// 			setMarkdown(text);
	// 		});
	// });

	// Open or close drawer
	const toggleDrawer = () => {
		setOpen(!open);
		console.log('Toggle');
	};

	// This is a test api call. Call this in the App function if you want to communicate with the API.
	const test = () => {
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
			// setMarkdown(response.data.file);
		});
	};

	test();

	return (
		<div className='App'>
			<Navigation open={open} />
			<div className='Main'>
				<Header
					toggleDrawer={toggleDrawer}
					algoPage={algoPage}
					setAlgoPage={setAlgoPage}
				/>

				<Dashboard />
				{/* <Unity className='Unity' unityContent={unityContent} /> */}
				{/* <MarkdownPreview source={markdown} style={{ color: 'white' }} /> */}
			</div>
		</div>
	);
}

export default App;
