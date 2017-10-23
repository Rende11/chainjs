import React from 'react';
import jssha from 'jssha';

export default class MyButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hash: "Your SHA will be here" };
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
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={(e) => this.onLoad(e)}>
        </input>
        <p>{this.state.hash}</p>
        <button onClick={this.onClick}>SendHash</button>
      </div>
    );
  }
}
