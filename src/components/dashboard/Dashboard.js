import './Dashboard.css';
import Algorithm from '../algorithm/Algorithm';
import { Link } from 'react-router-dom';

function Dashboard({
	groups,
	setPage,
	setCategory,
	categories,
	setAlgoPage,
	inCategory,
}) {
	return (
		<div className='Dashboard'>
			{groups.map((group) => (
				<Link className='Link' to={group.path}>
					<Algorithm
						title={group.title}
						description={group.description}
						key={group.title}
						setPage={setPage}
						group={group}
						setCategory={setCategory}
						categories={categories}
						setAlgoPage={setAlgoPage}
						width={320}
						height={220}
						inCategory={inCategory}
					/>
				</Link>
			))}
		</div>
	);
}

export default Dashboard;
