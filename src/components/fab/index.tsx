import { View, Text } from '@tarojs/components'
import { Button } from '@/components/index'
import { IProps as ButtonIProps } from '@/components/button'
import './index.scss'

export interface IProps {
  buttonProps?: ButtonIProps;
  icon?: string;
  text?: string;
  onClick?: (e) => void;
}

export default function ({ buttonProps, icon, text, onClick }: IProps) {
  return (
    <View className='fab'>
      <Button {...buttonProps} size='large' shape={text ? 'round' : 'circle'} theme='primary' children={text} icon={icon} onClick={onClick}></Button>
    </View>
  );
}
