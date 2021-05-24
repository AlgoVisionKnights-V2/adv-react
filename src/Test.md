# Hello There

```js
function App() {
	// Drawer setters
	const [open, setOpen] = React.useState(true);

	// PageToggler: Set to true if you want to see them
	const [algoPage, setAlgoPage] = React.useState(true);

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
				{/* <ReactMarkdown></ReactMarkdown> */}
			</div>
		</div>
	);
}
```
