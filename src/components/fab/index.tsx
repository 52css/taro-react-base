import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import { Button } from '@/components/index'
import { IFabProps } from './type'
import './index.scss'

export default function ({ buttonProps, icon, text, className, style, onClick }: IFabProps) {
  const rootClassName = classNames('fab', className)

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      <Button {...buttonProps} size='large' shape={text ? 'round' : 'circle'} theme='primary' icon={icon} onClick={onClick}>
        {text}
      </Button>
    </View>
  );
}
