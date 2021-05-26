import React from 'react';
import './Algorithm.css';
import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Algorithm({ title, description }) {
	const [heartColor, setHeartColor] = React.useState(false);
	const handleHeartColor = () => {
		setHeartColor(!heartColor);
	};
	return (
		<div class='Algorithm'>
			<Card id='card'>
				<CardContent id='card-content'>
					<Typography id='cardHeader'> {title} </Typography>
					<IconButton id='favorite-icon'>
						<FavoriteIcon
							style={{
								fontSize: '1.4em',
								color: heartColor ? '#ff335c' : '#1b203d',
							}}
							onClick={handleHeartColor}
						/>
					</IconButton>
				</CardContent>
				<CardContent id='card-content'>
					<Typography id='cardInfo'>{description}</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default Algorithm;
