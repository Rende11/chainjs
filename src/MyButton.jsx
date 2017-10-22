import React from 'react';
import jssha from 'jssha';

export default class MyButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hash: "Tolik" };
  }
  getSha = (file) => {
    const sha = new jssha("SHA-256", "TEXT");
    sha.update(file);
    return sha.getHash("HEX");
  }

  onLoad = (event) => {
    const [file] = event.target.files;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = (event) => {
      this.setState({ hash: this.getSha(event.target.result) });
    };
  }

  render() {
    return (
      <div>
        <button>Test</button>
        <form ectype="multipar/form-data">
          <input type="file" name="file" onChange={(e) => this.onLoad(e)}>
          </input>
        </form>
        <p>{this.state.hash}</p>
      </div>
    );
}}
