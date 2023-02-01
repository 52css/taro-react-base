import { View, Text } from '@tarojs/components'
import { Badge, Button } from '@/components/index'
import Taro from '@tarojs/taro'
import './index.scss'

export default function() {
  return (
    <View className='example'>
      <View className='example__demo'>
        <View className='example__demo__item'>
          <Badge dot> 消息 </Badge>
        </View>
        <View className='example__demo__item'>
          <Badge count={16}> 消息 </Badge>
        </View>
        <View className='example__demo__item'>
          <Badge count='New'> 消息 </Badge>
        </View>
        <View className='example__demo__item'>
          <Badge count='...'> 消息 </Badge>
        </View>
      </View>
      <View className='example__demo'>
        <View className='example__demo__item'>
          <Badge dot>
            <Button size='small'>小按钮</Button>
          </Badge>
        </View>
        <View className='example__demo__item'>
          <Badge count={16}>
            <Button size='small'>小按钮</Button>
          </Badge>
        </View>
        <View className='example__demo__item'>
          <Badge count='New'>
            <Button size='small'>小按钮</Button>
          </Badge>
        </View>
        <View className='example__demo__item'>
          <Badge count='...'>
            <Button size='small'>小按钮</Button>
          </Badge>
        </View>
      </View>
    </View>
  )
}
