import './Dashboard.css';
import Algorithm from '../algorithm/Algorithm';

function Dashboard({ groups, setPage, setCategory, categories, setAlgoPage }) {
	return (
		<div className='Dashboard'>
			{groups.map((group) => (
				<Algorithm
					title={group.title}
					description={group.description}
					key={group.title}
					setPage={setPage}
					group={group}
					setCategory={setCategory}
					categories={categories}
					setAlgoPage={setAlgoPage}
				/>
			))}
		</div>
	);
}

export default Dashboard;
