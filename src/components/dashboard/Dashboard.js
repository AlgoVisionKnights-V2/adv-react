import './Dashboard.css';
import algorithms from './algorithmList';
import Algorithm from '../algorithm/Algorithm';

function Dashboard() {
	return (
		<div className='Dashboard'>
			{algorithms.map((algorithm) => (
				<Algorithm
					title={algorithm.title}
					description={algorithm.description}
					key={algorithm.title}
				/>
			))}
		</div>
	);
}

export default Dashboard;
