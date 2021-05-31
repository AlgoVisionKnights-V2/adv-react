import './Category.css';

// Child Components
import Algorithm from '../algorithm/Algorithm';

function Category({ category, setPage, categories, setAlgoPage }) {
	// const description = category.description;
	const group = category.group;

	return (
		<div className='Category'>
			{group.map((name) => (
				<Algorithm
					title={name}
					key={name}
					setPage={setPage}
					categories={categories}
					setAlgoPage={setAlgoPage}
				/>
			))}
		</div>
	);
}

export default Category;
