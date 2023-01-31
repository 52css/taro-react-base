import { View, Text } from '@tarojs/components'
import { HelloProps } from './type'

function Hello({name}: HelloProps) {
  return (
    <View>
      Hello, {name}
    </View>
  );
}

export default Hello;
