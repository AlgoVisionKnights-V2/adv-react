import './Header.css';

// Assets
import { MdMenu, MdSearch } from 'react-icons/md';

function Header() {
	return (
		<div className='Header'>
			<MdMenu />
			<h1>Dashboard</h1>
			<span className='Links'>
				<MdSearch />
			</span>
		</div>
	);
}

export default Header;
