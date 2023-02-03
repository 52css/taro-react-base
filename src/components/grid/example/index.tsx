import { View, Text, Image } from '@tarojs/components'
import { Grid, GridItem } from '@/components/index'
import Taro from '@tarojs/taro'
import './index.scss'

export default function() {
  const imgUrl = 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png'
  return (
    <View className='example'>
      <Grid gutter={0} column={3} border={true}>
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
      </Grid>
    </View>
  )
}
