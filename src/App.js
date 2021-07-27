import './App.css';
import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import AlgorithmPage from './components/algorithmPage/AlgorithmPage';
import Category from './components/category/Category';

// Algorithm Objects
import categories from './components/algorithmList/Categories';
import algorithms from './components/algorithmList/Algorithms';

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

	// Resize screen handlers
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

	return (
		<div className='App'>
			<HashRouter>
				<Navigation
					open={open}
					toggleDrawer={toggleDrawer}
					setPage={setPage}
					page={page}
					setAlgoPage={setAlgoPage}
					viewWidth={viewWidth}
					categories={categories}
					algorithms={algorithms}
				/>
				<div className='Main'>
					<Header
						toggleDrawer={toggleDrawer}
						page={page}
						setPage={setPage}
						setAlgoPage={setAlgoPage}
						algoPage={algoPage}
						viewWidth={viewWidth}
						algorithms={algorithms}
						categories={categories}
					/>
					<Route component={'Page404'} />

					<Route
						exact={true}
						path='/'
						render={() => (
							<Dashboard
								categories={categories}
								algorithms={algorithms}
								inCategory={false}
							/>
						)}
					/>

					{categories.map((category) => (
						<Route exact={true} path={'/' + category.path}>
							<Category
								inCategory={true}
								algorithms={algorithms[category.path]}
							/>
						</Route>
					))}

					{Object.keys(algorithms).map((key) =>
						algorithms[key].map((algorithm) => (
							<Route exact={true} path={'/' + algorithm.path}>
								<AlgorithmPage
									path={algorithm.path}
									algoPage={algoPage}
								/>
							</Route>
						))
					)}
				</div>
			</HashRouter>
		</div>
	);
}

export default App;
