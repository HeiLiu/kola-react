/**
 * 参数： 
 * back: 控制返回按钮的显示
 * title: 配置header中的title
 * index: 显示搜索框
 * sacn: 扫一扫
 * msg: 信息页面图标
 */
import React, { Component } from 'react'
import scan from "../../assets/images/scan.png"
import msg from "../../assets/images/msg.png"
import setting from "../../assets/images/setting1.png"
import './header.styl'

class Header extends Component {
  handleClick() {
    // 原生的足以
    window.history.back()
  }
  toSearch() {
    // 跳转到Search组件
    console.log('跳转到搜索页面的操作 待会做')
  }
  toMsg() {
    // 跳转到消息中心
    alert('haimieyou')
  }
  toScan() {
    // 二维码扫描
  }
  toSetting() {
    // 设置页面
    alert('haimieyou')
  }
  render() {
    return (
      <div className="kola-header">
        {
          this.props.scan && <img className="header-scan" src={scan} onClick={this.toScan} alt=""/>
        }
        {
          this.props.back && <span className="header-back" onClick={this.handleClick}><i className="icon-back"></i></span>
        }
        {
          this.props.title && <div className="header-title">{this.props.title}</div>
        }
        {
          this.props.index && <div className="searchbanner" onClick={this.toSearch}><i className="u-searchicon"></i><span className="searchContent">周生生七夕礼 最高减1000元</span></div>
        }
        {
          this.props.setting && <img className="header-setting" src={setting} onClick={this.toSetting} alt="设置"/>
        }
        {
          this.props.msg && <img className="header-msg" src={msg} onClick={this.toMsg} alt="消息"/>
        }
      </div>

    )
  }
}

export default Header
