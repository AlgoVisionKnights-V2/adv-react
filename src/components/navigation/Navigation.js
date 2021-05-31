import './Navigation.css';
import React from 'react';

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

function Navigation({
	open,
	toggleDrawer,
	setPage,
	setAlgoPage,
	viewWidth,
	page,
	groups,
}) {
	const [expanded, setExpanded] = React.useState('Dashboard');

	// Handles panel clicks
	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded || panel === 'Dashboard' ? panel : false);

		if (panel === 'Dashboard') {
			setPage(panel);
		}
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
					<ListItem
						id='dashboard-nav-button'
						style={{
							color: page === 'Dashboard' ? '#ff335c' : '#ffffff',
						}}
						onClick={handleChange('Dashboard')}
						button>
						<ListItemText>Dashboard</ListItemText>
					</ListItem>
					{groups.map((group, i) => {
						return (
							<NavGroup
								title={group.title}
								group={group.group}
								key={group.title}
								panel={group.title}
								expanded={expanded}
								handleChange={handleChange}
								setPage={setPage}
								setAlgoPage={setAlgoPage}
							/>
						);
					})}
				</List>
			</Drawer>
		</div>
	);
}

export default Navigation;
