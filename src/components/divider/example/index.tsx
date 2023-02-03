import { View, Text } from '@tarojs/components'
import { Divider } from '@/components/index'
import Taro from '@tarojs/taro'
import './index.scss'

export default function() {
  return (
    <View className='example'>
      <View className='example-title'>直线拉通</View>
      <Divider />

      <View className='example-title'>虚线拉通</View>
      <Divider dashed />

      <View className='example-title'>左右间距</View>
      <View className='t-demo1'>
        <Divider />
      </View>

      <View className='example-title'>右侧拉通</View>
      <View className='t-demo2'>
        <Divider />
      </View>

      <View className='example-title'>自定义左侧距离</View>
      <View className='t-demo3'>
        <Divider />
      </View>

      <View className='example-title'>纯文字</View>
      <View className='t-demo1'>
        <Divider align='center' lineColor='transparent'>
          没有更多了～
        </Divider>
      </View>

      <View className='example-title'>垂直分割</View>
      <View className='vertical-panel'>
        <Text>文字信息</Text>
        <Divider layout='vertical'></Divider>
        <Text>文字信息</Text>
        <Divider layout='vertical'></Divider>
        <Text>文字信息</Text>
      </View>
    </View>
  )
}
