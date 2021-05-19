import './Navigation.css';

// Material UI components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Navigation() {
	return (
		<div className='Navigation'>
			<Drawer className='NavContainer' variant='permanent' open>
				<List>
					<ListItem button>
						<ListItemText primary='hello' />
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
}

export default Navigation;
