import './App.css';
import React from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import AlgorithmPage from './components/algorithmPage/AlgorithmPage';
import Category from './components/category/Category';

// Algorithm Objects
import groups from './components/algorithmList/Categories';
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
			<HashRouter>
				<Redirect exact to='/' />
				<Navigation
					open={open}
					toggleDrawer={toggleDrawer}
					setPage={setPage}
					page={page}
					setAlgoPage={setAlgoPage}
					viewWidth={viewWidth}
					groups={groups}
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
						categories={categories}
						algorithms={algorithms}
						groups={groups}
					/>
					<Route component={'Page404'} />

					<Route
						exact={true}
						path='/'
						render={() => (
							<Dashboard
								groups={groups}
								algorithms={algorithms}
								setPage={setPage}
								setCategory={setCategory}
								categories={categories}
								setAlgoPage={setAlgoPage}
								inCategory={false}
							/>
						)}
					/>

					{groups.map((group) => (
						<Route exact={true} path={'/' + group.path}>
							<Category
								category={category}
								setPage={setPage}
								categories={categories}
								setAlgoPage={setAlgoPage}
								inCategory={true}
								algorithms={algorithms[group.path]}
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
