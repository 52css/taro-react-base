import { View, Text } from '@tarojs/components'
import { Button } from '@/components/index'
import { IFabProps } from './type'
import './index.scss'

export default function ({ buttonProps, icon, text, onClick }: IFabProps) {
  return (
    <View className='fab'>
      <Button {...buttonProps} size='large' shape={text ? 'round' : 'circle'} theme='primary' children={text} icon={icon} onClick={onClick}></Button>
    </View>
  );
}
