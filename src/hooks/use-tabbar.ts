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
