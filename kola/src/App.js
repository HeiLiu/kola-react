import React, { Component } from 'react';
import './App.css';
import './assets/stylus/font.styl'
import './assets/stylus/reset.styl'
import HelloWorld from './components/hello-react/hello-react'
import Tabbar from './common/tabbar/Tabbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld/>
        <Tabbar/>
      </div>
    );
  }
}

export default App;
