import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'

import './index.scss'

function Index() {
  const goAbout = () => {
    Taro.navigateTo({
      url: `/pages/about/index?id=1`
    })
  }
  return (
    <View onClick={goAbout}>
      Index
    </View>
  );
}

export default Index;
