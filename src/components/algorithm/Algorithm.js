import React from 'react';
import './Algorithm.css';
import {
	Card,
	CardContent,
	// IconButton,
	Typography,
	Button,
} from '@material-ui/core';
import Tilt from 'react-tilt';
// import FavoriteIcon from '@material-ui/icons/Favorite';

function Algorithm({
	title,
	description,
	setPage,
	group,
	setCategory,
	categories,
	setAlgoPage,
	width,
	height,
	inCategory,
}) {
	const handleTopicPage = () => {
		setPage(title);
		setAlgoPage('visualizer');

		if (categories.has(title)) {
			setCategory(group);
		}
	};

	return (
		<Tilt
			style={{ width: inCategory ? '87%' : 'unset' }}
			options={{ max: 1.5, scale: 1.05 }}>
			<Button
				onClick={handleTopicPage}
				id='algorithm'
				style={{ width: width, height: height }}>
				<Card id='card'>
					<CardContent id='card-content'>
						<div className='CardHeader'>
							<Typography id='card-title'> {title} </Typography>
						</div>
						<div className='CardBody'>
							<Typography id='card-info'>
								{description}
							</Typography>
						</div>
					</CardContent>
				</Card>
			</Button>
		</Tilt>
	);
}

export default Algorithm;
