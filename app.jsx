marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: textToTransform
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="container-text">
          <Editor input={this.state.input} onChange={this.handleChange} />
        </div>
        <div className="container-preview">
          <Preview input={this.state.input} />
        </div>
      </div>
    );
  }
}

const Editor = props => {
  return (
    <textarea
      id="editor"
      value={props.input}
      onChange={props.onChange}
    ></textarea>
  );
};
const Preview = props => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.input, { renderer: renderer })
      }}
    ></div>
  );
};

const textToTransform = `asdfa dsfasd fasdf asdf asd fasd fasd fasd fasdf asdf 
  *sdf asdfa sdfa d
  **dadsfa ds
  # Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  
  `;
ReactDOM.render(<App />, document.getElementById("root"));
