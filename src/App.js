import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { name: "TOSTIK" };
  }

  onSubmit = (e) => {
    console.log(e);
    this.setState({ name: e });
  }

  onClick = (e) => {
    this.setState({ name: "IKI" });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MyButton />
      </div>
    );
  }
}

export default App;
