// import { Graphs } from './utils/utils'

const algorithms = {
	sorting: [
		{ name: 'Overview' },
		{ name: 'Bubble Sort', path: 'bubblesort' },
		{ name: 'Selection Sort', path: 'selectionsort' },
		{ name: 'Insertion Sort', path: 'insertionsort' },
		{ name: 'Quick Sort', path: 'quicksort' },
		{ name: 'Merge Sort', path: 'mergesort' },
	],
	searching: [
		{ name: 'Overview' },
		{ name: 'Linear Search', path: 'linearsearch' },
		{ name: 'Binary Search', path: 'binarysearch' },
	],
	datastructures: [
		{ name: 'Overview' },
		// { name: 'Arrays', path: 'arrays' },
		{ name: 'Linked List', path: 'linkedlist' },
	],
	graphs: [
		{ name: 'Overview' },
		{ name: "Dijkstra's", path: 'dijkstras' },
		{ name: 'Bellman Ford', path: 'bellmanford' },
		{ name: 'Breadth First Search', path: 'breadthfirstsearch' },
		{ name: 'Depth First Search', path: 'depthfirstsearch' },
		{ name: "Prim's", path: 'prims' },
	],
	trees: [
		{ name: 'Overview' },
		{ name: 'AVL', path: 'avl' },
		{ name: 'Binary Search Tree', path: 'binarysearchtree' },
		{ name: 'Preorder', path: 'preorder' },
		{ name: 'Inorder', path: 'inorder' },
		{ name: 'Postorder', path: 'postorder' },
	],
	// probabilisticdatastructures: [
	// 	{ name: 'Bloom Filters', path: 'bloomfilters' },
	// 	{ name: 'Skip List', path: 'skiplist' },
	// ],
	backtracking: [{ name: 'Overview' }, { name: 'nQueens', path: 'nqueens' }],
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
