import './NavLink.css';

// Material UI
import { ListItem, ListItemText } from '@material-ui/core';

function NavGroup({ name, setPage }) {
	const hello = () => {
		setPage(name);
	};
	return (
		<ListItem id='accordian-button' onClick={hello} button>
			<ListItemText id='accordian-text'>{name}</ListItemText>
		</ListItem>
	);
}

export default NavGroup;
