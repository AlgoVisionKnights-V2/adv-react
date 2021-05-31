import './Category.css';

// Child Components
import Algorithm from '../algorithm/Algorithm';

function Category({ category }) {
	// const description = category.description;
	const group = category.group;

	return (
		<div className='Category'>
			{group.map((name) => (
				<Algorithm title={name} key={name} />
			))}
		</div>
	);
}

export default Category;
