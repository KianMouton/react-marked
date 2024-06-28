import React from 'react';
import { marked } from 'marked';
import './App.css';

const startMarkup = `# header 
 ## header 
 [link](https://www.nytimes.com/games/wordle/index.html) 
 \`<p></p>\` 
 vark
\`\`\`
const vark = () => { 
 if(test1 == test2)
  return true;
 }
 \`\`\` 
 1. een
 1. twee
 1. drie
 > block quote 
 **bold** 
 ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: startMarkup,
      marked: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateMarked = this.updateMarked.bind(this);
  }

  handleChange(event) {
    const newText = event.target.value;
    this.setState({ text: newText }, this.updateMarked);
  }

  updateMarked() {
    const rawMarkup = marked(this.state.text);
    this.setState({ marked: rawMarkup });
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          id="editor"
          value={this.state.text}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: this.state.marked }}
        />
      </div>
    );
  }
}

export default App;