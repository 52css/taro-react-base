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

export default Category;
