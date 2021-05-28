import './App.css';
import React from 'react';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

// ! Markdown controls
// import MarkdownPreview from '@uiw/react-markdown-preview';
// import source from './assets/test.md';

// ! Unity Webgl components for Unity test
// import Unity, { UnityContent } from 'react-unity-webgl';

// const unityContent = new UnityContent(
// 	'build/test/build.json',
// 	'build/test/UnityLoader.js'
// );

function App() {
	// Drawer setters
	const [open, setOpen] = React.useState(false);

	// PageToggler: Set to true if you want to see them
	const [page, setPage] = React.useState('dashboard');

	// ! Markdown Renderer test
	// const [markdown, setMarkdown] = React.useState('');
	// React.useEffect(() => {
	// 	fetch(source)
	// 		.then((res) => res.text())
	// 		.then((text) => {
	// 			setMarkdown(text);
	// 		});
	// });

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
			/>
			<div className='Main'>
				<Header
					toggleDrawer={toggleDrawer}
					page={page}
					setPage={setPage}
				/>

				<Dashboard />
				{/* <Unity className='Unity' unityContent={unityContent} /> */}
				{/* <MarkdownPreview source={markdown} style={{ color: 'white' }} /> */}
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
