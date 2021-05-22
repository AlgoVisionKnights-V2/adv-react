import './Navigation.css';

// Material UI components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Material UI Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	drawer: {
		backgroundColor: '#262d4a',
		color: '#ffffff',
	},
}));

function Navigation() {
	// List of categories. Note: There will be more
	const links = ['Dashboard', 'Searching', 'Sorting', 'Graphs', 'Trees'];

	// Instantiating useStyles
	const classes = useStyles();

	return (
		<div className='Navigation'>
			<Drawer
				variant='permanent'
				classes={{ paper: classes.drawer }}
				open>
				<List>
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
