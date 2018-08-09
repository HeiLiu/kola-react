/**
 * 参数： 
 * back: 控制返回按钮的显示
 * title: 配置header中的title
 * sacn: 扫一扫
 */
import React, { Component } from 'react'
import scan from "../../assets/images/scan.png"
import msg from "../../assets/images/msg.png"
import './header.styl'

class Header extends Component {
  handleClick() {
    // 原生的足以
    window.history.back()
  }
  render() {
    return (
      <div className="kola-header">
        {
          this.props.scan && <img className="header-scan" src={scan} alt=""/>
        }
        {
          this.props.back && <span className="header-back" onClick={this.handleClick}><i className="icon-back"></i></span>
        }
        <div className="header-title">
          {this.props.title}
        </div>
        {
          this.props.index && <div className="searchbanner"><i class="u-searchicon"></i><span id="j-searchbanner">周生生七夕礼 最高减1000元</span></div>
        }
        {
          this.props.msg && <img className="header-msg" src={msg} alt=""/>
        }
      </div>

    )
  }
}

export default Header
