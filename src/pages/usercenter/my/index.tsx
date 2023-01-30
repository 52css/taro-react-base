import { View, Text } from '@tarojs/components'
import { useTabbar } from '@/hooks/index'

function My() {
  useTabbar(3)

  return (
    <View>
      My
    </View>
  );
}

definePageConfig({
  navigationBarTitleText: '我的'
})

export default My;
