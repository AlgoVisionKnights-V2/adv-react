import './Category.css';

// Child Components
import Algorithm from '../algorithm/Algorithm';

function Category({ category, setPage, categories }) {
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
				/>
			))}
		</div>
	);
}

export default Category;
