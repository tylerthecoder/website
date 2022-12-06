import MarkdownView from 'react-showdown';
import showdownKatex from 'showdown-katex';


export default function Page() {
	const markdown = `
# Welcome to React Showdown :+1:

To get started, edit the markdown in \`example/src/App.tsx\`.

| Column 1 | Column 2 |
|----------|----------|
| A1       | B1       |
| A2       | B2       |

$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$

\`\`\`latex
\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}
	\`\`\`


\`\`\`javascript
	const foo = 'bar';
	\`\`\`

`;

	console.log(showdownKatex({})()[0])


	return (
		<MarkdownView
			markdown={markdown}
			options={{
				tables: true,
				emoji: true,

			}}
			extensions={[
				showdownKatex({
					displayMode: false
				})()[0]
			]}
		/>
	)



}