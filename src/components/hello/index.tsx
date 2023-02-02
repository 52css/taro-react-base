import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import { IHelloProps } from './type'
import './index.scss'

export default function ({name, className, style, onClick}: IHelloProps) {
  const rootClassName = classNames('hello', className)

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      Hello, {name}
    </View>
  );
}
