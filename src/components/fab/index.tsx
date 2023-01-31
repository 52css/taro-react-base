import { View, Text } from '@tarojs/components'

export interface IProps {
  name: string;
}

export default function ({ name }: IProps) {
  return (
    <View>
      Hello, {name}
    </View>
  );
}
