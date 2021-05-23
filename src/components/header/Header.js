import './Header.css';

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

function Header() {
	return (
		<div className='Header'>
			<AppBar id='header-bar' elevation={0}>
				<Toolbar id='toolbar'>
					<div id='menu-tools'>
						<IconButton>
							<MenuIcon id='menu-icon' />
						</IconButton>

						<Typography id='header-title'>Dashboard</Typography>
					</div>
					<IconButton>
						<SearchIcon id='search-icon' />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
