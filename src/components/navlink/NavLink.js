import './NavLink.css';

// Material UI
import { ListItem, ListItemText } from '@material-ui/core';

function NavGroup({ name, setPage, setAlgoPage }) {
	const handlePage = () => {
		setPage(name);
		setAlgoPage('visualizer');
	};
	return (
		<ListItem id='accordian-button' onClick={handlePage} button>
			<ListItemText id='accordian-text'>{name}</ListItemText>
		</ListItem>
	);
}

export default NavGroup;
