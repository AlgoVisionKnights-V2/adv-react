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

function Algorithm({ title, description }) {
	// const [heartColor, setHeartColor] = React.useState(false);
	// const handleHeartColor = () => {
	// 	setHeartColor(!heartColor);
	// };

	const handleTopicPage = () => {
		console.log(title);
	};

	return (
		<Tilt options={{ max: 1.5, scale: 1.07 }}>
			<Button onClick={handleTopicPage} id='algorithm'>
				<Card id='card'>
					<CardContent id='card-content'>
						<div className='CardHeader'>
							<Typography id='card-title'> {title} </Typography>
							{/*  
						Removed Favorites for now
						<IconButton
							onClick={handleHeartColor}
							id='favorite-icon'>
							<FavoriteIcon
								style={{
									fontSize: '1.4em',
									color: heartColor ? '#ff335c' : '#1b203d',
								}}
							/>
						</IconButton> */}
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
