import './Navigation.css';

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

function Navigation({ open }) {
	// List of categories. Note: There will be more
	const links = [
		'Dashboard',
		'Searching',
		'Sorting',
		'Graphs',
		'Trees',
		'Dynamic Programming',
		'Backtracking',
		'Basic Data Structure',
	];

	// Instantiating useStyles
	const classes = useStyles();

	return (
		<div className='Navigation'>
			<Drawer
				id='drawer'
				variant='permanent'
				// classes={{ paper: classes.drawer }}
				classes={{
					paper: clsx({
						[classes.drawer]: open,
						[classes.drawerClose]: !open,
					}),
				}}>
				<div id='toolbar-container' className={classes.toolbar}>
					<Typography id='nav-title'>ADV</Typography>
				</div>
				<List id='hell'>
					{links.map((link) => (
						<ListItem button key={link}>
							<ListItemText>{link}</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
}

export default Navigation;
