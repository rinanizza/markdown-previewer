import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const initialMarkdown = `
# Welcome to Catherine's React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\u0060\u0060\u0060' && lastLine === '\u0060\u0060\u0060') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

<img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" 
     width="100%" 
     height="50" 
     alt="freeCodeCamp Logo">
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </div>
    </div>
  );
}

export default App;
