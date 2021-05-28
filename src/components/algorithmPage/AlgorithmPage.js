import './AlgorithmPage.css';

// Child Components
import InformationPage from '../informationPage/InformationPage';
import Visualizer from '../visualizer/Visualizer';

function AlgorithmPage({ page, algoPage }) {
	return (
		<div className='AlgorithmPage'>
			{algoPage === 'visualizer' ? <Visualizer /> : <InformationPage />}
		</div>
	);
}

export default AlgorithmPage;
