# 自定义tabbar

## 增加页面和路由，直接看代码

## 增加custom-tab-bar，直接看代码

## 对app.config.ts 增加 tabbar配置

```js
export default defineAppConfig({
  ...,
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar-home-on.png',
        iconPath: 'images/tabbar-home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/goods/category/index',
        selectedIconPath: 'images/tabbar-cate-on.png',
        iconPath: 'images/tabbar-cate.png',
        text: '分类'
      },
      {
        pagePath: 'pages/cart/index',
        selectedIconPath: 'images/tabbar-cart-on.png',
        iconPath: 'images/tabbar-cart.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/usercenter/my/index',
        selectedIconPath: 'images/tabbar-my-on.png',
        iconPath: 'images/tabbar-my.png',
        text: '个人中心'
      }
    ]
  }
})
```

## 增加hooks `hooks/use-tabbar.ts`

```js
import { useMemo } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import type CustomTabBar from '../custom-tab-bar'

export default (index = 0) => {
  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page)
    tabbar?.setSelected(index)
  })
}
```

引用, 以分类为例，第二个

```js
import { View, Text } from '@tarojs/components'
import { useTabbar } from '@/hooks/index'

function Category() {
  useTabbar(1)

  return (
    <View>
      Category
    </View>
  );
}

export default Category;

```
