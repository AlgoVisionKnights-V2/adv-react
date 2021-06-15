// List of categories. Note: There will be more
const groups = [
	{
		path: 'sorting',
		title: 'Sorting',
		description:
			'Sorting Algorithms are used to rearrange elements in an array or list. Some of the most commonly used sorting algorithms include bubble sort, merge sort, and quick sort.',
		group: [
			{ name: 'Bubble Sort', path: 'bubblesort' },
			{ name: 'Selection Sort', path: 'selectionsort' },
			{ name: 'Insertion Sort', path: 'insertionsort' },
			{ name: 'Quick Sort', path: 'quicksort' },
			{ name: 'Heap Sort', path: 'heapsort' },
			{ name: 'Merge Sort', path: 'mergesort' },
			{ name: 'Radix Sort', path: 'radixsort' },
		],
	},
	{
		path: 'searching',
		title: 'Searching',
		description: 'Yet to be filled.',
		group: [
			{ name: 'Linear Search', path: 'linearsearch' },
			{ name: 'Binary Search', path: 'binarysearch' },
			{ name: 'Fibonacci Search', path: 'fibonaccisearch' },
			{ name: 'Jump Search', path: 'jumpsearch' },
		],
	},
	{
		path: 'datastructures',
		title: 'Data Structures',
		description: 'Yet to be filled.',
		group: [
			{ name: 'Arrays', path: 'arrays' },
			{ name: 'Stacks', path: 'stacks' },
			{ name: 'Queues', path: 'queues' },
			{ name: 'Hash Tables', path: 'hashtables' },
			{ name: 'Linked List', path: 'linkedlist' },
			{ name: 'Graphs', path: 'graphs' },
			{ name: 'Trees', path: 'trees' },
		],
	},
	{
		path: 'graphs',
		title: 'Graphs',
		description: 'Yet to be filled.',
		group: [
			{ name: "Dijkstra's", path: 'dijkstras' },
			{ name: 'Bellman Ford', path: 'bellmanford' },
			{ name: 'Breadth First Search', path: 'breadthfirstsearch' },
			{ name: 'Depth First Search', path: 'depthfirstsearch' },
			{ name: 'Floyd-Warshall', path: 'floydwarshall' },
			{ name: "Kruskal's", path: 'kruskals' },
		],
	},
	{
		path: 'trees',
		title: 'Trees',
		description: 'Yet to be filled.',
		group: [
			{ name: 'AVL', path: 'avl' },
			{ name: 'Binary Tree', path: 'binaryttree' },
			{ name: 'Heaps', path: 'heaps' },
			{ name: 'Bread First Search', path: 'breadthfirstsearch' },
			{ name: 'Depth First Search', path: 'depthfirstsearch' },
			{ name: 'Preorder', path: 'preorder' },
			{ name: 'Inorder', path: 'inorder' },
			{ name: 'Postorder', path: 'postorder' },
			{ name: '2-4 Trees', path: '24trees' },
		],
	},
	{
		path: 'probabilisticdatastructures',
		title: 'Probabilistic Data Structures',
		description: 'Yet to be filled.',
		group: [
			{ name: 'Bloom Filters', path: 'bloomfilters' },
			{ name: 'Skip List', path: 'skiplist' },
		],
	},
	{
		path: 'backtracking',
		title: 'Backtracking',
		description: 'Yet to be filled.',
		group: [{ name: 'nQueens', path: 'nqueens' }],
	},
	{
		path: 'linkedlist',
		title: 'Linked List',
		description: 'Yet to be filled.',
		group: [
			{ name: 'Singly', path: 'singly' },
			{ name: 'Doubly', path: 'doubly' },
			{ name: 'Circular', path: 'circular' },
		],
	},
	{
		path: 'divideconquer',
		title: 'Divide and Conquer',
		description: 'Yet to be filled.',
		group: [
			{ name: 'Merge Sort', path: 'mergesort' },
			{ name: 'Quick Sort', path: 'quicksort' },
			{ name: 'Radix Sort', path: 'radixsort' },
		],
	},
	{
		path: 'dynamicprogramming',
		title: 'Dynamic Programming',
		description: 'Yet to be filled.',
		group: [{ name: 'Floyd-Warshal', path: 'floydwarshall' }],
	},
];

export default groups;
