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
					<div className='CardHeader'>
						<Typography id='card-title'> {title} </Typography>
						<IconButton id='favorite-icon'>
							<FavoriteIcon
								style={{
									fontSize: '1.4em',
									color: heartColor ? '#ff335c' : '#1b203d',
								}}
								onClick={handleHeartColor}
							/>
						</IconButton>
					</div>
					<div className='CardBody'>
						<Typography id='card-info'>{description}</Typography>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default Algorithm;
