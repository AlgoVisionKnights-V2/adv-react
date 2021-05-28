import './Navigation.css';
import React from 'react';
import groups from './AlgoList';

// Child components
import NavGroup from '../navgroup/NavGroup';

// Material UI components
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core/';
import clsx from 'clsx';

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	burger: {
		backgroundColor: '#262d4a',
	},
	drawer: {
		backgroundColor: '#262d4a',
		color: '#ffffff',
		position: 'inherit',
		width: '200px',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	toolbar: theme.mixins.toolbar,
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: '0px',
		backgroundColor: '#262d4a',
	},
}));

function Navigation({ open, toggleDrawer }) {
	const [expanded, setExpanded] = React.useState('');
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

	// Handles panel clicks
	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	// Instantiating useStyles
	const classes = useStyles();

	return (
		<div className='Navigation'>
			<Drawer
				id='drawer'
				variant={viewWidth > 1275 ? 'permanent' : null}
				open={open}
				onClose={toggleDrawer}
				classes={{
					paper:
						viewWidth <= 1275
							? classes.burger
							: clsx({
									[classes.drawer]: open,
									[classes.drawerClose]: !open,
							  }),
				}}>
				<div id='toolbar-container' className={classes.toolbar}>
					<Typography id='nav-title'>ADV</Typography>
				</div>
				<List>
					<ListItem id='dashboard-nav-button' button>
						<ListItemText>Dashboard</ListItemText>
					</ListItem>
					{groups.map((group, i) => (
						<NavGroup
							title={group.title}
							group={group.group}
							key={group}
							panel={'panel' + i}
							expanded={expanded}
							handleChange={handleChange}
						/>
					))}
				</List>
			</Drawer>
		</div>
	);
}

export default Navigation;
