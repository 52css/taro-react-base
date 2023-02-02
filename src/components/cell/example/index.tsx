import { View, Text } from '@tarojs/components'
import { Cell, Badge, Icon } from '@/components/index'
import Taro from '@tarojs/taro'
import './index.scss'

export default function() {
  return (
    <View className='example'>
      <Cell title='单行标题' className='test123' />
      <Cell title='单行标题' required hover url='react-mobile/components/getting-started' />
      <Cell title='单行标题' note='辅助信息' />
      <Cell title='单行标题' arrow />
      <Cell title='单行标题' arrow note='辅助信息' />
      <Cell title='单行标题' arrow note={<Badge count={8} />} />
      {/* <Cell title='单行标题' arrow note={<Switch />} /> */}
      <Cell title='单行标题' leftIcon={<Icon name='app' />} />
    </View>
  )
}
