import './Header.css';

// Assets
import { MdMenu, MdSearch } from 'react-icons/md';

function Header() {
	return (
		<div className='Header'>
			<span className='TitleGroup'>
				<MdMenu className='BurgerToggle' />
				<p className='Title'>Dashboard</p>
			</span>
			<span className='Links'>
				<MdSearch className='SearchButton' />
			</span>
		</div>
	);
}

export default Header;
