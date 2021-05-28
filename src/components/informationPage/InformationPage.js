import React from 'react';

// Markdown controls
import MarkdownPreview from '@uiw/react-markdown-preview';
import source from '../../assets/test.md';

function InformationPage() {
	// Markdown Renderer test
	const [markdown, setMarkdown] = React.useState('');
	React.useEffect(() => {
		fetch(source)
			.then((res) => res.text())
			.then((text) => {
				setMarkdown(text);
			});
	});

	return (
		<div className='InformationPage'>
			<MarkdownPreview source={markdown} style={{ color: 'white' }} />
		</div>
	);
}

export default InformationPage;
