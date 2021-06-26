import './Download.css';

import { Button, ButtonGroup } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { FaLinux, FaApple, FaWindows } from 'react-icons/fa';
// Device detection modules
import { isWindows, isMacOs } from 'react-device-detect';
import React from 'react';

function Download() {
	let os;

	// Determines which download package suits the device's OS.
	const renderTypeOfDownload = () => {
		if (isWindows) {
			os = 'Windows';
			return <FaWindows />;
		} else if (isMacOs) {
			os = 'OSX';
			return <FaApple />;
		} else {
			os = 'Linux';
			return <FaLinux />;
		}
	};

	// Download Application
	const download = () => {
		console.log(`Downloading for ${os}`);
	};

	return (
		<ButtonGroup id='download-container'>
			<Button id='download-button' onClick={download}>
				{renderTypeOfDownload()}
			</Button>
			<Button id='dropdown-button' onClick={download}>
				<GetAppIcon />
			</Button>
		</ButtonGroup>
	);
}

export default Download;
