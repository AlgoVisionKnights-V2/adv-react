import './utils.css';

// Images
import graphs from './images/graphs.png';
import queens from './images/queens.png';

// Sorting
export function Sorting() {
	return <div className='Sorting'>Sorting JSX</div>;
}

export function BubbleSort() {
	return <div className='BubbleSort'>Bubble Sort JSX</div>;
}

export function SelectionSort() {
	return <div className='SelectionSort'>Selection Sort JSX</div>;
}

export function InsertionSort() {
	return <div className='InsertionSort'>Insertion Sort JSX</div>;
}

export function QuickSort() {
	return <div className='QuickSort'>Quick Sort JSX</div>;
}

export function MergeSort() {
	return <div className='MergeSort'>Merge Sort JSX</div>;
}

// Searching
export function Searching() {
	return <div className='Searching'>Searching JSX</div>;
}

export function LinearSearch() {
	return <div className='LinearSearch'>Linear Search JSX</div>;
}

export function BinarySearch() {
	return <div className='BinarySearch'>Binary Search JSX</div>;
}

// Data Structures
export function DataStructures() {
	return <div className='DataStructures'>Data Structures JSX</div>;
}

export function LinkedList() {
	return <div className='LinkedList'>Linked List JSX</div>;
}

// Graphs
export function Graphs() {
	return (
		<div className='Graphs'>
			<img src={graphs} alt='graphs' rel='noreferrer' />
		</div>
	);
}

export function Dijkstras() {
	return <div className='Dijkstras'>Dijkstra's JSX</div>;
}

export function BellmanFord() {
	return <div className='BellmanFord'>Bellman Ford JSX</div>;
}

export function BreadthFirstSearch() {
	return (
		<div
			className='
    BreadthFirstSearch'>
			Breadth First Search JSX
		</div>
	);
}

export function DepthFirstSearch() {
	return <div className='DepthFirstSearch'>Depth First Search JSX</div>;
}

export function Prims() {
	return <div className='Prims'>Prim's JSX</div>;
}

// Trees
export function Trees() {
	return <div className='Trees'>Trees JSX</div>;
}

export function AVL() {
	return <div className='AVL'>AVL JSX</div>;
}

export function BinarySearchTree() {
	return <div className='BinarySearchTree'>Binary Search Tree JSX</div>;
}

export function Preorder() {
	return <div className='Preorder'>Preorder JSX</div>;
}

export function Inorder() {
	return <div className='Inorder'>Inorder JSX</div>;
}

export function Postorder() {
	return <div className='Postorder'>Postorder JSX</div>;
}

// Backtracking
export function Backtracking() {
	return <div className='Backtracking'>Backtracking JSX</div>;
}

export function Queens() {
	return (
		<div className='Queens'>
			<img src={queens} alt='queens' rel='noreferrer' />
		</div>
	);
}
