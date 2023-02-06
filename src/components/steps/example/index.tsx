import { View, Text, Image } from '@tarojs/components'
import { Grid, GridItem } from '@/components/index'
import Taro from '@tarojs/taro'
import './index.scss'

export default function() {
  const imgUrl = 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png'
  return (
    <View className='example'>
      <View className='example-title'>一行三个</View>
      <Grid gutter={0} column={3}>
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

      <View className='example-title'>一行四个</View>
      <Grid gutter={0} column={4}>
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
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
      </Grid>

      <View className='example-title'>一行五个</View>
      <Grid gutter={0} column={5}>
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
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
      </Grid>

      <View className='example-title'>一行两个带说明</View>
      <Grid gutter={0} column={2} align='left'>
        <GridItem
          description='说明文字'
          layout='horizontal'
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
        <GridItem
          description='说明文字'
          layout='horizontal'
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
      </Grid>

      <View className='example-title'>一行三个带说明</View>
      <Grid gutter={0} column={3}>
        <GridItem
          description='说明文字'
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
        <GridItem
          description='说明文字'
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
        <GridItem
          description='说明文字'
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
        />
      </Grid>

      <View className='example-title'>带徽标宫格</View>
      <Grid gutter={0} column={4}>
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
          badgeProps={{count: 16}}
        />
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
          badgeProps={{dot: true}}
        />
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
          badgeProps={{count: 'NEW'}}
        />
        <GridItem
          image={<Image className='img-3 img-vertical' src={imgUrl} />}
          text={<View className='text-3'>标题文字</View>}
          badgeProps={{count: '...'}}
        />
      </Grid>
    </View>
  )
}
