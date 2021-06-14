import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import AlgorithmPage from './components/algorithmPage/AlgorithmPage';
import Category from './components/category/Category';

// Algorithm Objects
import groups from './components/algorithmList/AlgoList';

function App() {
	// Drawer setters
	const [open, setOpen] = React.useState(false);

	// Open or close drawer
	const toggleDrawer = (event) => {
		setOpen(!open);
	};

	// PageToggler: Set to true if you want to see them
	const [page, setPage] = React.useState('Dashboard');

	// Visualizer and Information page toggler
	const [algoPage, setAlgoPage] = React.useState('visualizer');

	const [viewWidth, setViewWidth] = React.useState(window.innerWidth);

	React.useLayoutEffect(() => {
		// Records the width the screen in real-time
		const handleResize = () => {
			setViewWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	});

	const [category, setCategory] = React.useState(null);

	const categories = new Set();

	groups.forEach((group) => {
		categories.add(group.title);
	});

	return (
		<div className='App'>
			<Router>
				<Navigation
					open={open}
					toggleDrawer={toggleDrawer}
					setPage={setPage}
					page={page}
					setAlgoPage={setAlgoPage}
					viewWidth={viewWidth}
					groups={groups}
				/>
				<div className='Main'>
					<Header
						toggleDrawer={toggleDrawer}
						page={page}
						setPage={setPage}
						setAlgoPage={setAlgoPage}
						algoPage={algoPage}
						viewWidth={viewWidth}
						categories={categories}
					/>

					<Route
						exact={true}
						path='/'
						render={() => (
							<Dashboard
								groups={groups}
								setPage={setPage}
								setCategory={setCategory}
								categories={categories}
								setAlgoPage={setAlgoPage}
								inCategory={false}
							/>
						)}
					/>

					{/* {page === 'Dashboard' ? (
					<Dashboard
						groups={groups}
						setPage={setPage}
						setCategory={setCategory}
						categories={categories}
						setAlgoPage={setAlgoPage}
						inCategory={false}
					/>
				) : categories.has(page) ? (
					<Category
						category={category}
						setPage={setPage}
						categories={categories}
						setAlgoPage={setAlgoPage}
						inCategory={true}
					/>
				) : (
					<AlgorithmPage page={page} algoPage={algoPage} />
				)} */}
				</div>
			</Router>
		</div>
	);
}

export default App;
