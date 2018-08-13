import React, { Component } from 'react';
import './App.styl';
import './assets/stylus/font.styl'
import './assets/stylus/reset.styl'
import Header from './common/header/Header'
import Tabbar from './common/tabbar/Tabbar'
import Carousel from './common/carousel/Carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header scan index msg/>
        <div className="content">
          <Carousel/>
          <article class="promise">
            <a class="item" href="https://weex.kaola.com/activity/pages/quality.html?kpm=MjAxOA%3D%3D.MQ%3D%3D.bmV3Y29tZXI%3D.1" style={{width: '100%',height: '50px'}}>
              <img alt="" className="promise_img" src="https://haitao.nos.netease.com/gr4TfN5hhFhFg1CaUgya1mdkPDLpE4WTT1806271501_1125_144.png?imageView&amp;type=webp&amp;thumbnail=1125x144&amp;quality=95"/>
            </a>
          </article>
        </div>
        <Tabbar/>
      </div>
    );
  }
}

export default App;
