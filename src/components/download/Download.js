import './Download.css';

import { Button, ButtonGroup } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaLinux, FaApple, FaWindows } from 'react-icons/fa';
import AppleIcon from '@material-ui/icons/Apple';

function Download() {
	return (
		<ButtonGroup id='download-container'>
			<Button id='download-button'>
				<FaWindows />
			</Button>
			<Button id='dropdown-button'>
				<ExpandMoreIcon />
			</Button>
		</ButtonGroup>
	);
}

export default Download;
