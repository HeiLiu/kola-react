import React, { Component } from 'react';
import './App.css';
import './assets/stylus/reset.styl'
import HelloWorld from './components/hello-react/hello-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld/>
      </div>
    );
  }
}

export default App;
