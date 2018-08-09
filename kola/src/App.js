import React, { Component } from 'react';
import './App.css';
import './assets/stylus/font.styl'
import './assets/stylus/reset.styl'
import Header from './common/header/Header'
import Tabbar from './common/tabbar/Tabbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header index scan msg/>
        <Tabbar/>
      </div>
    );
  }
}

export default App;
