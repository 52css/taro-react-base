import { View, Text, Navigator } from '@tarojs/components'

function Example() {
  return (
    <View>
      <View>基础组件</View>
      <Navigator url='/components/icon/example/index'> Icon 图标 </Navigator>
      <Navigator url='/components/button/example/index'> Button 按钮 </Navigator>
      <Navigator url='/components/fab/example/index'> Fab 悬浮按钮 </Navigator>
      <View>布局</View>
      <View>导航</View>
      <View>输入</View>
      <View>数据展示</View>
      <Navigator url='/components/badge/example/index'> Badge 徽标 </Navigator>
      <View>消息提醒</View>
    </View>
  );
}

definePageConfig({
  navigationBarTitleText: 'TDesign Taro React UI'
})

export default Example;
