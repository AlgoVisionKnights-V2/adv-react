import './Category.css';
import { Link } from 'react-router-dom';

// Child Components
import Algorithm from '../algorithm/Algorithm';

function Category({
	category,
	setPage,
	categories,
	setAlgoPage,
	inCategory,
	algorithms,
}) {
	// const description = category.description
	return (
		<div className='Category'>
			<Algorithm
				title={'Overview'}
				key={'Overview'}
				setPage={setPage}
				categories={categories}
				setAlgoPage={setAlgoPage}
				width={'100%'}
				height={280}
				inCategory={inCategory}
			/>

			{algorithms.map((algorithm) => (
				<Link className='Link' to={algorithm.path}>
					<Algorithm
						title={algorithm.name}
						key={algorithm.name}
						setPage={setPage}
						categories={categories}
						setAlgoPage={setAlgoPage}
						width={'100%'}
						height={280}
						inCategory={inCategory}
					/>
				</Link>
			))}
		</div>
	);
}

export default Category;
