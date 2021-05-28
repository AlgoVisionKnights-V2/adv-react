import './Visualizer.css';

// Unity Webgl components for Unity test
import Unity, { UnityContent } from 'react-unity-webgl';

const unityContent = new UnityContent(
	'build/test/build.json',
	'build/test/UnityLoader.js'
);

function Visualizer() {
	return (
		<div className='Visualizer'>
			<Unity className='Unity' unityContent={unityContent} />
		</div>
	);
}

export default Visualizer;
