import './Category.css';

// Child Components
import Algorithm from '../algorithm/Algorithm';

function Category({ category, setPage, categories, setAlgoPage, inCategory }) {
	// const description = category.description;
	const group = category.group;

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

			{group.map((name) => (
				<Algorithm
					title={name}
					key={name}
					setPage={setPage}
					categories={categories}
					setAlgoPage={setAlgoPage}
					width={'100%'}
					height={280}
					inCategory={inCategory}
				/>
			))}
		</div>
	);
}

export default Category;
