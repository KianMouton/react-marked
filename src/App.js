import React from 'react';
import { marked } from 'marked';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
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