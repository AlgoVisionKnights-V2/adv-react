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
import singlylinkedlistgif from './images/singlylinkedlistgif.gif';
import linearsearchgif from './images/linearsearchgif.gif';

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
			<img src={linearsearchgif} alt='graphs' rel='noreferrer' />
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

export function SinglyLinkedList() {
	return (
		<div className='SinglyLinkedList'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Operation</th>
							<th>Best Case</th>
							<th>Worst Case</th>
						</tr>
						<tr>
							<td>Search</td>
							<td>{constant}</td>
							<td>{linear}</td>
						</tr>
						<tr>
							<td>Insertion</td>
							<td>{constant}</td>
							<td>{linear}</td>
						</tr>
						<tr>
							<td>Deletion</td>
							<td>{constant}</td>
							<td>{linear}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
			<img src={singlylinkedlistgif} alt='graphs' rel='noreferrer' />
		</div>
	);
}

// Graphs
export function Graphs() {
	return (
		<div className='Graphs'>
			<img src={graphs} alt='graphs' rel='noreferrer' />
		</div>
	);
}

const dijkstratime = (
	<MathJax.Node formula={`O(|E| \\ + \\ |V| \\ log \\ |V|)`} />
);

const dijkstraspace = <MathJax.Node formula={`O(|V| \\ + \\ |E|)`} />;

export function Dijkstras() {
	return (
		<div className='Dijkstras'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{dijkstratime}</td>
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
							<td>{dijkstraspace}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

const bellmantimebest = <MathJax.Node formula={`O(|E|)`} />;
const bellmantimeworst = <MathJax.Node formula={`O(|V||E|)`} />;
const bellmanspace = <MathJax.Node formula={`O(|V|)`} />;

export function BellmanFord() {
	return (
		<div className='BellmanFord'>
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
							<td>{bellmantimebest}</td>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{bellmantimeworst}</td>
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
							<td>{bellmanspace}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

const bfstime = <MathJax.Node formula={`O(|V| \\ + \\ |E|) \\ = \\ O(b^d)`} />;
const bfsspace = <MathJax.Node formula={`O(|V|) \\ = \\ O(b^d)`} />;

export function BreadthFirstSearch() {
	return (
		<div
			className='
    BreadthFirstSearch'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{bfstime}</td>
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
							<td>{bfsspace}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

const dfstime = <MathJax.Node formula={`O(|V| \\ + \\ |E|)`} />;
const dfsspace = <MathJax.Node formula={`O(|V|)`} />;

export function DepthFirstSearch() {
	return (
		<div className='DepthFirstSearch'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{dfstime}</td>
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
							<td>{dfsspace}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

const matrix = <MathJax.Node formula={`O(|V|^2)`} />;
const binary = <MathJax.Node formula={`O(|V| \\ + \\ |E| \\ log \\ |V|)`} />;
const fibonacci = <MathJax.Node formula={`O(|E| \\ + \\ |V| \\ log \\ |V|)`} />;

export function Prims() {
	return (
		<div className='Prims'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Implementation</th>
							<th>Worst Case</th>
						</tr>
						<tr>
							<td>Adjacency Matrix</td>
							<td>{matrix}</td>
						</tr>
						<tr>
							<td>Binary Heap and Adjacency List</td>
							<td>{binary}</td>
						</tr>
						<tr>
							<td>Fibonacci Heap and Adjacency List</td>
							<td>{fibonacci}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

// Trees
export function Trees() {
	return <div className='Trees'>Trees JSX</div>;
}

export function AVL() {
	return (
		<div className='AVL'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Operation</th>
							<th>Average Case</th>
							<th>Worst Case</th>
						</tr>
						<tr>
							<td>Search</td>
							<td>{log}</td>
							<td>{log}</td>
						</tr>
						<tr>
							<td>Insertion</td>
							<td>{log}</td>
							<td>{log}</td>
						</tr>
						<tr>
							<td>Deletion</td>
							<td>{log}</td>
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
							<td>{linear}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

export function BinarySearchTree() {
	return (
		<div className='BinarySearchTree'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Operation</th>
							<th>Average Case</th>
							<th>Worst Case</th>
						</tr>
						<tr>
							<td>Search</td>
							<td>{log}</td>
							<td>{linear}</td>
						</tr>
						<tr>
							<td>Insertion</td>
							<td>{log}</td>
							<td>{linear}</td>
						</tr>
						<tr>
							<td>Deletion</td>
							<td>{log}</td>
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
							<td>{linear}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

export function Preorder() {
	return (
		<div className='Preorder'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{dfstime}</td>
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
							<td>{dfsspace}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

export function Inorder() {
	return (
		<div className='Inorder'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{dfstime}</td>
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
							<td>{dfsspace}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

export function Postorder() {
	return (
		<div className='Postorder'>
			<MathJax.Provider>
				<div>
					<p className='SubHeader'>Time Complexity:</p>
					<table>
						<tr>
							<th>Cases</th>
							<th>Runtime</th>
						</tr>
						<tr>
							<td>Worst Case</td>
							<td>{dfstime}</td>
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
							<td>{dfsspace}</td>
						</tr>
					</table>
				</div>
			</MathJax.Provider>
		</div>
	);
}

// Backtracking
export function Backtracking() {
	return <div className='Backtracking'>Backtracking JSX</div>;
}

export function Queens() {
	return (
		<div className='Queens'>
			<div>
				<p>
					<strong>Problem Statement:</strong> Given an integer,{' '}
					<strong>n</strong>, representing the number of queens given
					to you. Place all <strong>n</strong> queens on an{' '}
					<strong>n x n</strong> chessboard such that no two queens
					can attack each other.
				</p>
			</div>
			<img src={queens} alt='queens' rel='noreferrer' />
		</div>
	);
}
