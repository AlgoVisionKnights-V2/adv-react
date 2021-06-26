import './Visualizer.css';
import React from 'react';

// Unity Webgl components for Unity test
import Unity, { UnityContent } from 'react-unity-webgl';

function Visualizer({ path }) {
	const unityContent = new UnityContent(
		`build/${path}/build.json`,
		`build/${path}/UnityLoader.js`
	);

	return (
		<div className='Visualizer'>
			<Unity className='Unity' unityContent={unityContent} />
		</div>
	);
}

export default Visualizer;
