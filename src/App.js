import './App.css';
import React from 'react';
import 'github-syntax-dark/lib/github-dark.css';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

// import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MarkdownPreview from '@uiw/react-markdown-preview';
import source from './test.md';

// Unity Webgl components for Unity test
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
	'build/test/build.json',
	'build/test/UnityLoader.js'
);

function App() {
	// Drawer setters
	const [open, setOpen] = React.useState(true);

	// PageToggler: Set to true if you want to see them
	const [algoPage, setAlgoPage] = React.useState(true);

	// Markdown Renderer test
	const [markdown, setMarkdown] = React.useState('');
	React.useEffect(() => {
		fetch(source)
			.then((res) => res.text())
			.then((text) => {
				setMarkdown(text);
			});
	});

	// Open or close drawer
	const toggleDrawer = () => {
		setOpen(!open);
		console.log('Toggle');
	};

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
			</div>
			{/* <MarkdownPreview source={markdown} style={{ color: 'white' }} /> */}
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
