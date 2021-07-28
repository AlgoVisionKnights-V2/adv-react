import './utils.css';
import MathJax from 'react-mathjax';

// Images and gifs
import graphs from './images/graphs.png';
import queens from './images/queens.png';
import bubblegif from './images/bubblegif.gif';
import selectiongif from './images/selectiongif.gif';
import insertiongif from './images/insertiongif.gif';
import quicksortgif from './images/quicksortgif.gif';
import mergergif from './images/mergegif.gif';
import binarysearchgif from './images/binarysearchgif.gif';

const constant = <MathJax.Node formula={`O(1)`} />;
const log = <MathJax.Node formula={`O(log \\ n)`} />;
const linear = <MathJax.Node formula={`O(n)`} />;
const nlogn = <MathJax.Node formula={`O(n \\ log \\ n)`} />;
const n2 = <MathJax.Node formula={`O(n^2)`} />;

const nd2 = <MathJax.Node formula={`O(n / 2)`} />;

// Sorting
export function Sorting() {
	return <div className='Sorting'>Sorting JSX</div>;
}

export function BubbleSort() {
	return (
		<div className='BubbleSort'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Operation</th>
							<th>Best Case</th>
							<th>Average Case</th>
							<th>Worst Case</th>
						</tr>
						<tr>
							<td>Comparisons</td>
							<td>{linear}</td>
							<td>{n2}</td>
							<td>{n2}</td>
						</tr>
						<tr>
							<td>Swaps</td>
							<td>{constant}</td>
							<td>{n2}</td>
							<td>{n2}</td>
						</tr>
					</table>
				</div>
				<div>
					<p className='SubHeader'>Space Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Space</th>
						</tr>

						<tr>
							<td>Worst Case</td>
							<td>{linear}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>

			<img src={bubblegif} alt='graphs' rel='noreferrer' />
		</div>
	);
}

export function SelectionSort() {
	return (
		<div className='SelectionSort'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Operation</th>
							<th>Best Case</th>
							<th>Average Case</th>
							<th>Worst Case</th>
						</tr>
						<tr>
							<td>Comparisons</td>
							<td>{n2}</td>
							<td>{n2}</td>
							<td>{n2}</td>
						</tr>
						<tr>
							<td>Swaps</td>
							<td>{constant}</td>
							<td>{linear}</td>
							<td>{linear}</td>
						</tr>
					</table>
				</div>
				<div>
					<p className='SubHeader'>Space Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Space</th>
						</tr>

						<tr>
							<td>Worst Case</td>
							<td>{constant}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
			<img src={selectiongif} alt='graphs' rel='noreferrer' />
		</div>
	);
}

export function InsertionSort() {
	return (
		<div className='InsertionSort'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Operation</th>
							<th>Best Case</th>
							<th>Average Case</th>
							<th>Worst Case</th>
						</tr>
						<tr>
							<td>Comparisons</td>
							<td>{linear}</td>
							<td>{n2}</td>
							<td>{n2}</td>
						</tr>
						<tr>
							<td>Swaps</td>
							<td>{constant}</td>
							<td>{n2}</td>
							<td>{n2}</td>
						</tr>
					</table>
				</div>
				<div>
					<p className='SubHeader'>Space Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Space</th>
						</tr>

						<tr>
							<td>Worst Case</td>
							<td>{linear}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
			<img src={insertiongif} alt='graphs' rel='noreferrer' />
		</div>
	);
}

export function QuickSort() {
	return (
		<div className='QuickSort'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Best Case</td>
							<td>{nlogn}</td>
						</tr>
						<tr>
							<td>Average Case</td>
							<td>{nlogn}</td>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{n2}</td>
						</tr>
					</table>
				</div>
				<div>
					<p className='SubHeader'>Space Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Space</th>
						</tr>

						<tr>
							<td>Worst Case</td>
							<td>{linear}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
			<img src={quicksortgif} alt='graphs' rel='noreferrer' />
		</div>
	);
}

export function MergeSort() {
	return (
		<div className='MergeSort'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Best Case</td>
							<td>{nlogn}</td>
						</tr>
						<tr>
							<td>Average Case</td>
							<td>{nlogn}</td>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{nlogn}</td>
						</tr>
					</table>
				</div>
				<div>
					<p className='SubHeader'>Space Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Space</th>
						</tr>

						<tr>
							<td>Worst Case</td>
							<td>{linear}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
			<img src={mergergif} alt='graphs' rel='noreferrer' />
		</div>
	);
}

// Searching
export function Searching() {
	return <div className='Searching'></div>;
}

export function LinearSearch() {
	return (
		<div className='LinearSearch'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Best Case</td>
							<td>{constant}</td>
						</tr>
						<tr>
							<td>Average Case</td>
							<td>{nd2}</td>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{linear}</td>
						</tr>
					</table>
				</div>
				<div>
					<p className='SubHeader'>Space Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Space</th>
						</tr>

						<tr>
							<td>Worst Case</td>
							<td>{constant}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

export function BinarySearch() {
	return (
		<div className='BinarySearch'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Best Case</td>
							<td>{constant}</td>
						</tr>
						<tr>
							<td>Average Case</td>
							<td>{log}</td>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{log}</td>
						</tr>
					</table>
				</div>
				<div>
					<p className='SubHeader'>Space Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Space</th>
						</tr>

						<tr>
							<td>Worst Case</td>
							<td>{constant}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
			<img src={binarysearchgif} alt='graphs' rel='noreferrer' />
		</div>
	);
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
