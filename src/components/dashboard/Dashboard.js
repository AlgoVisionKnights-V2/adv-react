import './Dashboard.css';
import algorithms from './algorithmList';
import {Card} from '@material-ui/core';
import Algorithm from '../algorithm/Algorithm';

function Dashboard() {
	return (
		<div className='Dashboard'>
			{algorithms.map((algorithm)=>(<Algorithm title={algorithm.title} description={algorithm.description}/>))}	
		</div>
	);
}

export default Dashboard;
