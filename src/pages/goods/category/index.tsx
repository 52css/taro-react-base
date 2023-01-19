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

definePageConfig({
  navigationBarTitleText: '分类'
})

export default Category;
