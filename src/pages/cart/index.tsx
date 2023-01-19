import { View, Text } from '@tarojs/components'
import { useTabbar } from '@/hooks/index'

function Cart() {
  useTabbar(2)


  return (
    <View>
      Cart
    </View>
  );
}

definePageConfig({
  navigationBarTitleText: '购物车'
})

export default Cart;
