import './Visualizer.css';
import React from 'react';

// Unity Webgl components for Unity test
import Unity, { UnityContext } from 'react-unity-webgl';

function Visualizer({ path }) {
	// const unityContent = new UnityContent(
	// 	`UnityBuilds/${path}/build.json`,
	// 	`UnityBuilds/${path}/UnityLoader.js`
	// );

	const unityContext = new UnityContext({
		loaderUrl: `UnityBuilds/${path}/build.loader.js`,
		dataUrl: `UnityBuilds/${path}/build.data`,
		frameworkUrl: `UnityBuilds/${path}/build.framework.js`,
		codeUrl: `UnityBuilds/${path}/build.wasm`,
	});

	return (
		<div className='Visualizer'>
			{/* <Unity className='Unity' unityContent={unityContent} /> */}
			<Unity className='Unity' unityContext={unityContext} />
		</div>
	);
}

export default Visualizer;
