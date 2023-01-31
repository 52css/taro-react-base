import { View, Text } from '@tarojs/components'
import { CellProps } from './type';

export default function ({
  align = 'middle',
  arrow = false,
  bordered = true,
  description,
  hover = false,
  image,
  leftIcon,
  note,
  required = false,
  rightIcon,
  title,
  url,
  onClick
}: CellProps) {
  return (
    <View className='cell'>
      Hello
    </View>
  );
}
