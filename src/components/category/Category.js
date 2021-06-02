import './Category.css';

// Child Components
import Algorithm from '../algorithm/Algorithm';
import SubtopicCard from '../subtopicCard/SubtopicCard'

function Category({ category, setPage, categories, setAlgoPage }) {
	// const description = category.description;
	const group = category.group;

	return (
		<div className='Category'>
			{group.map((name) => (
				<SubtopicCard 
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
