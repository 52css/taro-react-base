import { View, Text, Navigator } from '@tarojs/components'

function Example() {
  return (
    <View>
      <Navigator url='/components/icon/example/index'>
        Icon 图标
      </Navigator>
      <Navigator url='/components/button/example/index'>
        Button 按钮
      </Navigator>
    </View>
  );
}

definePageConfig({
  navigationBarTitleText: 'TDesign Taro React UI'
})

export default Example;
