import { View, Text } from '@tarojs/components'
import { IHelloProps } from './type'

export default function ({name}: IHelloProps) {
  return (
    <View>
      Hello, {name}
    </View>
  );
}
