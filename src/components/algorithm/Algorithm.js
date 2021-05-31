import React from 'react';
import './Algorithm.css';
import { Card, CardContent, IconButton, Typography, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {BrowserRouter} from 'react-dom';

function Algorithm({ title, description }) {
	const [heartColor, setHeartColor] = React.useState(false);
	const handleHeartColor = () => {
		setHeartColor(!heartColor);
	};
	const [topicPage, setTopicPage] = React.useState(true);
	const handleTopicPage = () => {
		console.log('clicked');
		setTopicPage(!topicPage);
	};
	return (
		<Button id='algorithm'>
			<Card onClick={handleTopicPage} id='card'>
				<CardContent id='card-content'>
					<div className='CardHeader'>
						<Typography id='card-title'> {title} </Typography>
						<IconButton
							onClick={handleHeartColor}
							id='favorite-icon'>
							<FavoriteIcon
								style={{
									fontSize: '1.4em',
									color: heartColor ? '#ff335c' : '#1b203d',
								}}
							/>
						</IconButton>
					</div>
					<div className='CardBody'>
						<Typography id='card-info'>{description}</Typography>
					</div>
				</CardContent>
			</Card>
		</Button>
	);
}

export default Algorithm;
