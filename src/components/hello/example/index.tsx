import { View, Text } from '@tarojs/components'
import { Hello } from '@/components/index'
import Taro from '@tarojs/taro'
import './index.scss'

export default function() {
  return (
    <View className='example'>
      <Hello name='world' />
    </View>
  )
}
