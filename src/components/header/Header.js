import './Header.css';
import React from 'react';
import { Route } from 'react-router-dom';

// Child Components
import MenuToggle from '../menu/MenuToggle';

// Material UI
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	inputIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		zIndex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		width: '100%',
	},
}));

function Header({
	toggleDrawer,
	page,
	algoPage,
	setAlgoPage,
	viewWidth,
	categories,
	algorithms,
	groups,
}) {
	const [search, setSearch] = React.useState(false);

	const classes = useStyles();

	React.useEffect(() => {
		const checkSize = () => {
			if (viewWidth > 650) {
				setSearch(false);
			}
		};

		checkSize();
	});

	// Toggles mobile search
	const toggleSearch = () => {
		setSearch(!search);
	};

	return (
		<div className='Header'>
			<AppBar id='header-bar' elevation={0}>
				<Toolbar id='toolbar'>
					<div className='MenuTools'>
						{viewWidth > 650 || !search ? (
							<div className='LeftMenus'>
								<IconButton onClick={toggleDrawer}>
									<MenuIcon id='menu-icon' />
								</IconButton>

								<Route exact={true} path='/'>
									<Typography id='header-title'>
										Dashboard
									</Typography>
								</Route>

								{groups.map((group) => (
									<Route exact={true} path={'/' + group.path}>
										<Typography id='header-title'>
											{group.title}
										</Typography>
									</Route>
								))}

								{Object.keys(algorithms).map((key) =>
									algorithms[key].map((algorithm) => (
										<Route
											exact={true}
											path={'/' + algorithm.path}>
											<Typography id='header-title'>
												{algorithm.name}
											</Typography>
										</Route>
									))
								)}
							</div>
						) : null}

						{viewWidth > 650 || search ? (
							<div id='search-input' className={classes.search}>
								{viewWidth > 650 ? (
									<SearchIcon
										id='input-icon'
										className={classes.inputIcon}
									/>
								) : (
									<IconButton
										id='input-icon'
										className={classes.inputIcon}
										onClick={toggleSearch}>
										<ArrowBackIcon />
									</IconButton>
								)}

								<InputBase
									placeholder='Search...'
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
								/>
							</div>
						) : (
							<div className='SearchInputMobile'>
								<IconButton
									id='search-button-mobile'
									onClick={toggleSearch}>
									<SearchIcon id='search-icon-mobile' />
								</IconButton>
							</div>
						)}
					</div>

					{Object.keys(algorithms).map((key) =>
						algorithms[key].map((algorithm) => (
							<Route exact={true} path={'/' + algorithm.path}>
								<MenuToggle
									setAlgoPage={setAlgoPage}
									algoPage={algoPage}
									viewWidth={viewWidth}
								/>
							</Route>
						))
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
