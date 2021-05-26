import React from 'react';
import './PageToggle.css';

import { Button, ButtonGroup, Typography } from '@material-ui/core';

function PageToggle() {
	const [page, setPage] = React.useState('information');
	const color = '#ff335c';

	const handleInformationPage = () => {
		setPage('information');
	};

	const handleVisualizerPage = () => {
		setPage('visualizer');
	};

	return (
		<ButtonGroup id='button-group' variant='text'>
			<Button
				id='information-button'
				onClick={handleInformationPage}
				style={{
					color: page === 'information' ? color : '#ffffff',
				}}>
				<Typography>Information</Typography>
			</Button>
			<Button
				id='visualizer-button'
				onClick={handleVisualizerPage}
				style={{
					color: page === 'visualizer' ? color : '#ffffff',
				}}>
				<Typography>Visualizer</Typography>
			</Button>
		</ButtonGroup>
	);
}

export default PageToggle;
