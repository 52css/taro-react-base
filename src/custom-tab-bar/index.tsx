import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#DC143C',
    list: [
      {
        pagePath: '/pages/index/index',
        selectedIconPath: '../images/tabbar-home-on.png',
        iconPath: '../images/tabbar-home.png',
        text: '首页'
      },
      {
        pagePath: '/pages/goods/category/index',
        selectedIconPath: '../images/tabbar-cate-on.png',
        iconPath: '../images/tabbar-cate.png',
        text: '分类'
      },
      {
        pagePath: '/pages/cart/index',
        selectedIconPath: '../images/tabbar-cart-on.png',
        iconPath: '../images/tabbar-cart.png',
        text: '购物车'
      },
      {
        pagePath: '/pages/usercenter/my/index',
        selectedIconPath: '../images/tabbar-my-on.png',
        iconPath: '../images/tabbar-my.png',
        text: '个人中心'
      }
    ]
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected (idx: number) {
    this.setState({
      selected: idx
    })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}
