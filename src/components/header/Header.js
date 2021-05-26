import './Header.css';
import React from 'react';

// Child Components
import PageToggle from '../pageToggle/PageToggle';

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
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
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

function Header({ toggleDrawer, algoPage, setAlgoPage }) {
	const classes = useStyles();

	return (
		<div className='Header'>
			<AppBar id='header-bar' elevation={0}>
				<Toolbar id='toolbar'>
					<div className='MenuTools'>
						<div className='LeftMenus'>
							<IconButton onClick={toggleDrawer}>
								<MenuIcon id='menu-icon' />
							</IconButton>

							<Typography id='header-title'>Dashboard</Typography>
						</div>

						<div id='search-input' className={classes.search}>
							<SearchIcon
								id='search-icon'
								className={classes.searchIcon}
							/>
							<InputBase
								placeholder='Search...'
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
							/>
						</div>
					</div>

					<div className='TopPageToggle'>
						{algoPage ? <PageToggle /> : null}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
