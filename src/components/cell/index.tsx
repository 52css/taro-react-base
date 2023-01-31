import { View, Text } from '@tarojs/components'
import { ICellProps } from './type';

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
}: ICellProps) {
  return (
    <View className='cell'>
      Hello
    </View>
  );
}
