import React from 'react';
import jssha from 'jssha';

export default class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hash: '', hashInfo: {} };
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

  onClick = () => {
      fetch('/sha', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sha: this.state.hash
        })
      })
      .then(response => response.json())
      .then(data => this.setState({ hashInfo: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={(e) => this.onLoad(e)}>
        </input>
        <p>{this.state.hash.length > 0 ? this.state.hash : 'Your hash will be here'}</p>
        <button onClick={this.onClick}>SendHash</button>
        <p>{this.state.hashInfo.ts ? `Registret at ${this.state.hashInfo.ts}` : ''}</p>
      </div>
    );
  }
}
