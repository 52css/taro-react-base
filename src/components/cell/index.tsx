import { View, Text } from '@tarojs/components'

export type CellAlign = `top` | `middle` | `bottom`

export interface IProps {
  align: CellAlign;
  arrow: boolean;
  bordered: boolean;
  description: string;
  hover: boolean;
  image: string;
}

export default function ({ name }: IProps) {
  return (
    <View>
      Hello, {name}
    </View>
  );
}
