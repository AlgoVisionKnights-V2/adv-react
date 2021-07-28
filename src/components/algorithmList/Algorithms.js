import {
	Sorting,
	BubbleSort,
	SelectionSort,
	InsertionSort,
	MergeSort,
	QuickSort,
	Searching,
	LinearSearch,
	BinarySearch,
	DataStructures,
	LinkedList,
	Graphs,
	Dijkstras,
	BellmanFord,
	BreadthFirstSearch,
	DepthFirstSearch,
	Prims,
	Trees,
	AVL,
	BinarySearchTree,
	Preorder,
	Inorder,
	Postorder,
	Backtracking,
	Queens,
} from './utils/utils';

const algorithms = {
	sorting: [
		// { name: 'Overview', description: <Sorting /> },
		{
			name: 'Bubble Sort',
			path: 'bubblesort',
			description: <BubbleSort />,
		},
		{
			name: 'Selection Sort',
			path: 'selectionsort',
			description: <SelectionSort />,
		},
		{
			name: 'Insertion Sort',
			path: 'insertionsort',
			description: <InsertionSort />,
		},
		{ name: 'Quick Sort', path: 'quicksort', description: <QuickSort /> },
		{ name: 'Merge Sort', path: 'mergesort', description: <MergeSort /> },
	],
	searching: [
		// { name: 'Overview', description: <Searching /> },
		{
			name: 'Linear Search',
			path: 'linearsearch',
			description: <LinearSearch />,
		},
		{
			name: 'Binary Search',
			path: 'binarysearch',
			description: <BinarySearch />,
		},
	],
	datastructures: [
		// { name: 'Overview', description: <DataStructures /> },
		// { name: 'Arrays', path: 'arrays' },
		{
			name: 'Linked List',
			path: 'linkedlist',
			description: <LinkedList />,
		},
	],
	graphs: [
		// { name: 'Overview', description: <Graphs /> },
		{ name: "Dijkstra's", path: 'dijkstras', description: <Dijkstras /> },
		{
			name: 'Bellman Ford',
			path: 'bellmanford',
			description: <BellmanFord />,
		},
		{
			name: 'Breadth First Search',
			path: 'breadthfirstsearch',
			description: <BreadthFirstSearch />,
		},
		{
			name: 'Depth First Search',
			path: 'depthfirstsearch',
			description: <DepthFirstSearch />,
		},
		{ name: "Prim's", path: 'prims', description: <Prims /> },
	],
	trees: [
		// { name: 'Overview', description: <Trees /> },
		{ name: 'AVL', path: 'avl', description: <AVL /> },
		{
			name: 'Binary Search Tree',
			path: 'binarysearchtree',
			description: <BinarySearchTree />,
		},
		{ name: 'Preorder', path: 'preorder', description: <Preorder /> },
		{ name: 'Inorder', path: 'inorder', description: <Inorder /> },
		{ name: 'Postorder', path: 'postorder', description: <Postorder /> },
	],
	// probabilisticdatastructures: [
	// 	{ name: 'Bloom Filters', path: 'bloomfilters' },
	// 	{ name: 'Skip List', path: 'skiplist' },
	// ],
	backtracking: [
		// { name: 'Overview', description: <Backtracking /> },
		{ name: 'nQueens', path: 'nqueens', description: <Queens /> },
	],
	// linkedlist: [
	// 	{ name: 'Singly', path: 'singly' },
	// 	{ name: 'Doubly', path: 'doubly' },
	// 	{ name: 'Circular', path: 'circular' },
	// ],
	// divideconquer: [
	// 	{ name: 'Merge Sort', path: 'mergesort' },
	// 	{ name: 'Quick Sort', path: 'quicksort' },
	// ],
	// dynamicprogramming: [{ name: 'Floyd-Warshal', path: 'floydwarshall' }],
};

export default algorithms;
