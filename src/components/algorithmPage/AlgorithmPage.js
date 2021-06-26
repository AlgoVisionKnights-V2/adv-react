import './AlgorithmPage.css';
import React from 'react';

// Child Components
import InformationPage from '../informationPage/InformationPage';
import Visualizer from '../visualizer/Visualizer';

function AlgorithmPage({ path, algoPage }) {
	return (
		<div className='AlgorithmPage'>
			{algoPage === 'visualizer' ? (
				<Visualizer path={path} />
			) : (
				<InformationPage path={path} />
			)}
		</div>
	);
}

export default AlgorithmPage;
