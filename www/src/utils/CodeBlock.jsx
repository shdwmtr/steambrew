import React, { useEffect, useRef } from 'react';

import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

export const CodeBlock = ({ language, value }) => {
	const codeRef = useRef(null);
	useEffect(() => {
		if (codeRef.current) {
			hljs.highlightElement(codeRef.current);
		}
	}, [value]);

	return (
		<pre>
			<code ref={codeRef} className={language}>
				{value}
			</code>
		</pre>
	);
};
